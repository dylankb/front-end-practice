$(function() {
  var $searchField = $('#search-field');

  var contacts = {};
  var tags = {};
  var templates = {};
  var partials = {};

  function idCounter() {
    var contactId = 0;

    return function() {
      return contactId += 1;
    };
  }

  // Counters are base 1
  contactCounter = idCounter();
  tagCounter = idCounter();

  var contactManager = {
    init: function() {
      $("script[type='text/x-handlebars']").each(function() {
        var $template = $(this);
        templates[$template.attr('id')] = Handlebars.compile($template.html());
      });

      $("script[data-type='partial']").each(function() {
        var $partial = $(this);
        Handlebars.registerPartial($partial.attr('id'), $partial.html());
      });
      this.bindEvents();
    },
    addNewContact: function(contactInfo) {
      var newContact = new Contact(contactInfo);
      contacts[newContact.id] = newContact;
    },
    addNewTag: function(tagInfo) {
      var newTag = new Tag(tagInfo);
      tags[newTag.id] = newTag;
      console.log(tags);
    },
    bindEvents: function() {
      $('.new-contact').on('click', this.showContactForm);
      $('.new-tag').on('click', this.showTagForm);
      $('.sections').on('submit', '.contact-form', this.processContactInfo.bind(this));
      $('.sections').on('submit', '.tag-form', this.processTagInfo.bind(this));
      $('.toolbar').on('keyup', '#search-field', this.displaySearchResults.bind(this));
      $('.results').on('click', '.edit-contact', this.editContact);
      $('.results').on('click', '.delete-contact', this.deleteContact.bind(this));
      $('.sections').on('click', '.cancel-button', this.transitionFromInputToResults);
      $('.results').on('click', '.tag', this.displayTaggedContacts.bind(this));
      $('.results').on('click', '.close', this.closeSearchResults.bind(this));
    },
    closeSearchResults: function(e) {
      e.preventDefault();

      $('.search-results').remove();
      this.updateResults(contacts);
    },
    deleteContact: function(e) {
      e.preventDefault();

      var $e = $(e.currentTarget);
      var id = $e.parents("li").data('id');

      delete contacts[id];
      this.updateResults(contacts);
    },
    displayTaggedContacts: function(e) {
      e.preventDefault();

      var tagId = $(e.currentTarget).data('tag-id');
      var tag = tags[tagId];
      var contactObjects = tag.contacts();

      this.updateResults(contactObjects);

      if (!$('.search-results').length) {
        $('.results').prepend(templates.resultsMessage());
      }

      this.displayResultsMessage("Contacts tagged with ");
      $('.search-text').text(tag.tagName);
    },
    displayResultsMessage: function(message) {
      $('.large-text')[0].firstChild.textContent = message;
    },
    displaySearchResults: function(e) {
      var $searchResults = $('.search-results');
      var searchQuery = $('#search-field').val();
      var contactResults = this.searchContacts(searchQuery);

      if (!$searchResults.length) {
        $('.results').prepend(templates.resultsMessage());
      }

      if (!searchQuery) {
        $searchResults.remove();
        this.updateResults(contacts);
        return;
      }

      $('.search-text').text(searchQuery);

      if (contactResults.length === 0) {
        this.displayResultsMessage("There is no contact starting with ");
      } else {
        this.displayResultsMessage("Contacts starting with ");
      }

      this.updateResults(contactResults);
    },
    editContact: function(e) {
      e.preventDefault();

      var id = $(this).parents("li").data('id');

      $('.results').hide();
      $('.toolbar').hide();

      $('.sections').append(templates.contactForm(contacts[id]));
      $('.tagSelectOptions').html(templates.tags({ tags: tags}));

      if (contacts[id].tagIds.length > 0) {
        $(".tagSelectOptions input[type='checkbox']").each(function() {
          var tagId = Number(this.value);

          if (contacts[id].tagIds.indexOf(tagId) !== -1) {
            this.checked = true;
          }
        });
      }
    },
    /*
      Adds tags key value pair values to an array. Other input are key value only
    */
    getFormInputs: function($form) {
      var $inputs = $form.serializeArray();
      var formattedInputs = $inputs.reduce(function(acc, input) {
        if (input.name === "tags") {
          if (acc[input.name]) {
            acc[input.name].push(Number(input.value));
          } else {
            acc[input.name] = [Number(input.value)];
          }
        } else {
          acc[input.name] = input.value;
        }
        return acc;
      }, {});

      return formattedInputs;
    },
    processContactInfo: function(e) {
      e.preventDefault();

      var existingContactId = $('.contact-form').data('contact-id');
      var $form = $(e.target);
      var contactInfo = this.getFormInputs($form);
      var refreshPage = false;

      if (this.validNewSubmission(contactInfo, existingContactId)) {
        this.addNewContact(contactInfo);
        refreshPage = true;
      }
      else if (existingContactId) {
        this.updateContact(contactInfo, existingContactId);
        refreshPage = true;
      } else {
        alert("You are trying to submit a blank form. Fill in a field or click Cancel.");
      }

      if (refreshPage) {
        this.updateResults(contacts);
        this.transitionFromInputToResults(e);
      }
    },
    processTagInfo: function(e) {
      e.preventDefault();

      var idField = $('.tag-form input[type="hidden"]').val();
      var $form = $(e.target);
      var tagInfo = this.getFormInputs($form);
      var refreshPage = false;

      if (this.validNewSubmission(tagInfo, idField)) {
        this.addNewTag(tagInfo);
        refreshPage = true;
      }

      if (refreshPage) {
        this.transitionFromInputToResults(e);
      }
    },
    searchContacts: function(query) {
      var contactObjects = Object.values(contacts);
      var contactResults = contactObjects.filter(function(contact) {
        return contact.name.indexOf(query) !== -1;
      });

      return contactResults;
    },
    showContactForm: function(e) {
      e.preventDefault();

      $('.results').hide();
      $('.sections').append(templates.contactForm());
      $('.tagSelectOptions').html(templates.tags({ tags: tags}));
      $('.toolbar').hide();
    },
    showTagForm: function(e) {
      e.preventDefault();

      $('.results').hide();
      $('.sections').append(templates.tagForm());
      $('.toolbar').hide();
    },
    transitionFromInputToResults: function(e) {
      e.preventDefault();

      $('.toolbar').show();
      $('.form').remove();
      $('.results').show();
    },
    validNewSubmission: function(data, id) {
      var fields = Object.values(data);
      var notAllBlank = fields.some(function(field) {
        return field.length !== 0;
      });

      return notAllBlank && !id;
    },
    updateContact: function(contactInfo, id) {
      contacts[id] = Object.assign(contacts[id], contactInfo);
      if (!contactInfo.tagIds) {
        contacts[id].tagIds = [];
      }
    },
    updateResults: function(contactResults) {
      var contactObjects = Object.values(contactResults);

      $('.results ul').html(templates.contactsTemplate({ contacts: contactObjects }));

      contactObjects.forEach(function(contact) {
        var $contactLi = $('.results .contact').filter(function(i, contactEle) {
          return $(contactEle).data("id") === contact.id;
        });

        // Why would contacts be scoped to a template here (if there was a contact template)?
        $contactLi.find('.info').append(templates.contactTags({ contactTags: contacts[contact.id].tags() }));
      });

    },

  };

  contactManager.init();

  function Contact(data) {
    this.name = data.name || '';
    this.email = data.email || '';
    this.phone = data.phone || '';
    this.tagIds = data.tags;

    this.id = contactCounter();
  }

  Contact.prototype.tags = function() {
    if (!this.tagIds) { return; }
    var tagObjs = [];

    this.tagIds.forEach(function(tagId) {
      tagObjs.push(tags[tagId]);
    });

    return tagObjs;
  };

  function Tag(data) {
    this.tagName = data.tagName;

    this.id = tagCounter();
  }

  Tag.prototype.contacts = function() {
    var taggedContacts = Object.values(contacts).filter(function(contact) {
      if (!contact.tagIds) { return; }
      return contact.tagIds.indexOf(this.id) !== -1;
    }.bind(this));

    return taggedContacts;
  };

});
