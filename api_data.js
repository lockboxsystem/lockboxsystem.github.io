define({ api: [
  {
    "type": "get",
    "url": "/customer/anchor/:anchor_nr",
    "title": "Kunde abfragen",
    "name": "GetCustomerByAnchor",
    "group": "Customer",
    "version": "1.0.0",
    "permission": {
      "name": "apikey",
      "title": "Lesezugriff auf Sendungen",
      "description": "Zur Abfrage muss der GET-Parameter ?apikey=[DEIN_API_KEY] immer mit gesendet werden.\n"
    },
    "description": "<p>Gibt Informationen zu einem bei Lockbox registrierten Kunden aus.</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "field": "anchor_nr",
            "optional": false,
            "description": "<p>Ankernummer des Kunden. In der Form a123, A123 oder A00123.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object[]",
            "field": "Customer",
            "optional": false,
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "String",
            "field": "Customer.customer_nr",
            "optional": false,
            "description": "<p>Kundennummer</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "field": "Customer.anchor_nr",
            "optional": false,
            "description": "<p>Ankernummer</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "field": "Customer.foa",
            "optional": false,
            "description": "<p>Anrede, 0 für Frau, 1 für Herr</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "field": "Customer.first_name",
            "optional": false,
            "description": "<p>Vorname</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "field": "Customer.last_name",
            "optional": false,
            "description": "<p>Nachname</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "field": "Customer.company",
            "optional": false,
            "description": "<p>Firma</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "field": "Customer.street",
            "optional": false,
            "description": "<p>Straße</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "field": "Customer.streetnumber",
            "optional": false,
            "description": "<p>Hausnummer</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "field": "Customer.additional_info",
            "optional": false,
            "description": "<p>Adresszusatz, Etage, Eingang</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "field": "Customer.zip_code",
            "optional": false,
            "description": "<p>Postleitzahl</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "field": "Customer.city",
            "optional": false,
            "description": "<p>Stadt</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "field": "Customer.country",
            "optional": false,
            "description": "<p>Land, ISO 3166-1 alpha-2 code</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "Success-Response:\n   HTTP/1.1 200 OK\n   {\n         Customer: {\n            customer_nr: \"12345678\"\n            anchor_nr: \"A00123\"\n            foa: \"1\"\n            first_name: \"Max\"\n            last_name: \"Musterman\"\n            company: \"\"\n            street: \"Musterstr.\"\n            streetnumber: \"66\"\n            additional_info: null\n            zip_code: \"10117\"\n            city: \"Berlin\"\n            country: \"DE\"\n        }\n    }\n",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 400": [
          {
            "group": "Error 400",
            "field": "anchor_nr",
            "optional": false,
            "description": "<p>Missing anchor number.</p>"
          }
        ],
        "Error 404": [
          {
            "group": "Error 404",
            "field": "anchor_nr",
            "optional": false,
            "description": "<p>Anchor number not found or Customer not found.</p>"
          }
        ],
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "field": "apikey",
            "optional": false,
            "description": "<p>Missing or wrong API Key.</p>"
          },
          {
            "group": "Error 4xx",
            "field": "function",
            "optional": false,
            "description": "<p>The requested function does not exists.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "Error-Response:\n   HTTP/1.1 404 Not found\n   {\n     \"errors\":[\n         {\n             \"title\" : \"No Customer found\",\n             \"status\": \"404\",\n         }\n     ]\n   }\n",
          "type": "json"
        },
        {
          "title": "Error-Response:",
          "content": "Error-Response:\n   HTTP/1.1 400 Bad request\n   {\n      \"errors\":[\n         {\n             \"title\" : \"Missing API-Key\",\n             \"status\": \"400\",\n         }\n     ]\n   }\n",
          "type": "json"
        },
        {
          "title": "Error-Response:",
          "content": "Error-Response:\n   HTTP/1.1 400 Bad request\n   {\n     \"errors\":[\n         {\n             \"title\" : \"Missing function\",\n             \"status\": \"400\",\n         }\n     ]\n   }\n",
          "type": "json"
        }
      ]
    },
    "filename": "src/apiv1.js"
  },
  {
    "type": "post",
    "url": "/delivery/item",
    "title": "Sendung anlegen",
    "name": "AddDeliveryById",
    "group": "Delivery",
    "version": "1.0.0",
    "permission": {
      "name": "apikey",
      "title": "Lesezugriff auf Sendungen",
      "description": "Zur Abfrage muss der GET-Parameter ?apikey=[DEIN_API_KEY] immer mit gesendet werden.\n"
    },
    "description": "<p>Eine neue Sendung wird im System angelegt. Empfänger von Sendungen können ausschließlich Lockbox Kunden sein.Der Absender der Sendung wird über den API-Key automatisch ermittelt. Aufruf gibt Fehlermeldungen wenn die Erstellung der Sendung nicht erfolgreich war.Bei erfolgreichem Anlegen einer Sendung wird das Delivery Obejct wie oben beschrieben zurückgegeben.</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "field": "anchor_nr",
            "optional": false,
            "description": "<p>Ankernummer in der Form a123, A123 oder A00123</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "field": "reference",
            "optional": true,
            "description": "<p>Referenz Nummer aus dem eigenen System. Auch als String möglich. Wird auf dem Label abgebildet als Barcode bei numerischen Werten oder die ersten 20-Zeichen bei Text.</p>"
          },
          {
            "group": "Parameter",
            "type": "Object[]",
            "field": "boxes",
            "optional": false,
            "description": "<p>Verwendeten Boxen</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "field": "boxes.type",
            "optional": false,
            "description": "<p>Box Type (z.B.: m,l,xl,thermo)</p>"
          },
          {
            "group": "Parameter",
            "type": "Date",
            "field": "date_start",
            "optional": true,
            "description": "<p>Ob welchem Datum die Sendung abgeholt werden kann. Dies erlaubt es Sendungen in der Zukunft zu erstellen um das Label im internen Prozess zu verwenden. In der Form Y-m-d. Ohne vorgegebenes Datum wird die Sendung als sofort verfügbar erstellt.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 204": [
          {
            "group": "Success 204",
            "type": "Object[]",
            "field": "Delivery",
            "optional": false,
            "description": "<p>wie in /delivery/item/:id beschrieben</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "field": "anchor_nr",
            "optional": false,
            "description": "<p>Ankernummer unbekannt oder falsch</p>"
          },
          {
            "group": "Error 4xx",
            "field": "date_start",
            "optional": false,
            "description": "<p>Datum falsch formartiert</p>"
          },
          {
            "group": "Error 4xx",
            "field": "boxes",
            "optional": false,
            "description": "<p>Keine Boxen angeben, nicht als Array oder mehr als 9</p>"
          },
          {
            "group": "Error 4xx",
            "field": "boxes.type",
            "optional": false,
            "description": "<p>Der gegebene Type ist nicht bekannt</p>"
          }
        ]
      }
    },
    "filename": "src/apiv1.js"
  },
  {
    "type": "get",
    "url": "/delivery/list",
    "title": "Sendungen",
    "name": "GetDeliveries",
    "group": "Delivery",
    "version": "1.0.0",
    "permission": {
      "name": "apikey",
      "title": "Lesezugriff auf Sendungen",
      "description": "Zur Abfrage muss der GET-Parameter ?apikey=[DEIN_API_KEY] immer mit gesendet werden.\n"
    },
    "description": "<p>Liefert eine Liste der noch nicht zugestellten Sendungen zurück die dem ServiceProvider zugewiesen sind oder erstellt wurden. Die Ausgabe ist auf maximal 100 Sendungen beschränkt. Weitere Filteroptionen werden folgen.</p>",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object[]",
            "field": "Deliveries",
            "optional": false,
            "description": "<p>Rückgabe eines Arrays mit Delivery Objekten wie in /deliveries/item beschrieben.</p>"
          }
        ]
      }
    },
    "filename": "src/apiv1.js"
  },
  {
    "type": "get",
    "url": "/delivery/item/:id",
    "title": "Sendung abfragen",
    "name": "GetDeliveryById",
    "group": "Delivery",
    "version": "1.0.0",
    "permission": {
      "name": "apikey",
      "title": "Lesezugriff auf Sendungen",
      "description": "Zur Abfrage muss der GET-Parameter ?apikey=[DEIN_API_KEY] immer mit gesendet werden.\n"
    },
    "description": "<p>Zu einer Sendung werden alle Informationen zurückgegeben. Dort sind die wichtigstenTracking Events vorhanden.</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "field": "id",
            "optional": false,
            "description": "<p>Sendungs id mit 36 Zeichen.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object[]",
            "field": "Delivery",
            "optional": false,
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "String",
            "field": "Delivery.id",
            "optional": false,
            "description": "<p>Sendungs ID mit 36-Zeichen</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "field": "Delivery.anchor_nr",
            "optional": false,
            "description": "<p>Ankernummer der Sendung</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "field": "Delivery.tracking_nr",
            "optional": false,
            "description": "<p>Sendungsnummer zur Verfolgung</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "field": "Delivery.status",
            "optional": false,
            "description": "<p>Aktueller Status der Sendung</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "field": "Delivery.label_url",
            "optional": false,
            "description": "<p>Abfrage des Labels als PDF-Datei</p>"
          },
          {
            "group": "Success 200",
            "type": "Object[]",
            "field": "Delivery.boxes",
            "optional": false,
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "Number",
            "field": "Delivery.boxes.box_nr",
            "optional": false,
            "description": "<p>Nummer einer einzelnen Box</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "field": "Delivery.boxes.type",
            "optional": false,
            "description": "<p>Type einer Box (z.B.: m,l,xl,thermo)</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "field": "Delivery.reference",
            "optional": false,
            "description": "<p>Referenz Nummer. Ist auf dem Label abgedruckt. Entweder die ersten 20-Zeichen oder als Barcode bei 12-stelligen numerischen Wert.</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "field": "Delivery.date_start",
            "optional": false,
            "description": "<p>Datum an welchem die Sendung zur Auslieferung bereit ist.</p>"
          },
          {
            "group": "Success 200",
            "type": "Object[]",
            "field": "Delivery.tracking_events",
            "optional": false,
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "string",
            "field": "Delivery.tracking_events.status",
            "optional": false,
            "description": "<p>Status</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "field": "Delivery.tracking_events.details",
            "optional": false,
            "description": "<p>Beschreibung</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "field": "Delivery.tracking_events.created",
            "optional": false,
            "description": "<p>Datum</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Responce:",
          "content": "Success-Responce:\n     HTTP/1.1 200 OK\n    {\n        Delivery: {\n            id: \"543ced73-fddc-47d9-af01-04ddfb6fadfa\"\n            anchor_nr: \"A00123\"\n            tracking_nr: \"000079792\"\n            label_url: \"http://api.lockboxsystem.com/v1/delivery/label/543ced73-fddc-47d9-af01-04ddfb6fadfa.pdf\"\n            status: \"DeliveryCreated\"\n            boxes: [\n                {\n                    box_nr: \"0000797921\"\n                    type: \"xl\"\n                },\n                {\n                    box_nr: \"0000797922\"\n                    type: \"m\"\n                }\n            ]\n            reference: \"1234215\"\n            to_company: \"\"\n            to_firt_name: \"Max\"\n            to_last_name: \"Mustermann\"\n            to_street: \"Musterstraße\"\n            to_streetnumber: \"66\"\n            to_additional_info: null\n            to_zip_code: \"10117\"\n            to_city: \"Berlin\"\n            to_country: \"DE\"\n            from_company: \"Shopname\"\n            from_firt_name: \"\"\n            from_last_name: \"\"\n            from_street: \"\"\n            from_streetnumber: \"\"\n            from_additional_info: \"\"\n            from_zip_code: \"\"\n            from_city: \"\"\n            from_country: \"DE\"\n            date_start: \"2014-10-16\"\n            tracking_events: [\n                {\n                    status: \"BoxDelivery.DeliveryCreated\"\n                    details: \"Lieferung für ServiceProvider 'Shopname' erstellt an Kunden 'Max Mustermann'.\"\n                    created: \"2014-10-14T11:31:31+02:00\"\n                },\n                {\n                    status: \"BoxDelivery.DeliveryAssignedSP\"\n                    details: \"Lieferung L000079792 an Kunden 'Max Mustermann' wurde an Lieferdienst 'Versandservice' zur Auslieferung übergeben.\"\n                    created: \"2014-10-14T11:31:31+02:00\"\n                }\n            ]\n            created: \"2014-10-14T11:31:31+02:00\"\n        }\n    }\n",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "field": "apikey",
            "optional": false,
            "description": "<p>Missing or wrong API Key.</p>"
          },
          {
            "group": "Error 4xx",
            "field": "function",
            "optional": false,
            "description": "<p>The requested function does not exists.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "Error-Response:\n   HTTP/1.1 400 Bad request\n   {\n      \"errors\":[\n         {\n             \"title\" : \"Missing API-Key\",\n             \"status\": \"400\",\n         }\n     ]\n   }\n",
          "type": "json"
        },
        {
          "title": "Error-Response:",
          "content": "Error-Response:\n   HTTP/1.1 400 Bad request\n   {\n     \"errors\":[\n         {\n             \"title\" : \"Missing function\",\n             \"status\": \"400\",\n         }\n     ]\n   }\n",
          "type": "json"
        }
      ]
    },
    "filename": "src/apiv1.js"
  },
  {
    "type": "get",
    "url": "/delivery/label/:id.pdf",
    "title": "Sendungs Label",
    "name": "GetDeliveryLabelById",
    "group": "Delivery",
    "version": "1.0.0",
    "permission": {
      "name": "apikey",
      "title": "Lesezugriff auf Sendungen",
      "description": "Zur Abfrage muss der GET-Parameter ?apikey=[DEIN_API_KEY] immer mit gesendet werden.\n"
    },
    "description": "<p>Ausgabe des Labels zum drucken. Das Label beinhaltet eine Seite für jede Box im Format 60x100mm.</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "field": "id",
            "optional": false,
            "description": "<p>Sendungs id mit 36 Zeichen.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "PDF",
            "field": "Label",
            "optional": false,
            "description": "<p>Ausgabe einer PDF-Datei</p>"
          }
        ]
      }
    },
    "filename": "src/apiv1.js"
  },
  {
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "field": "apikey",
            "optional": false,
            "description": "<p>Missing or wrong API Key.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "Error-Response:\n   HTTP/1.1 400 Bad request\n   {\n      \"errors\":[\n         {\n             \"title\" : \"Missing API-Key\",\n             \"status\": \"400\",\n         }\n     ]\n   }\n",
          "type": "json"
        }
      ]
    },
    "group": "apiv1_js",
    "type": "",
    "url": "",
    "version": "0.0.0",
    "filename": "src/apiv1.js"
  },
  {
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "field": "function",
            "optional": false,
            "description": "<p>The requested function does not exists.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "Error-Response:\n   HTTP/1.1 400 Bad request\n   {\n     \"errors\":[\n         {\n             \"title\" : \"Missing function\",\n             \"status\": \"400\",\n         }\n     ]\n   }\n",
          "type": "json"
        }
      ]
    },
    "group": "apiv1_js",
    "type": "",
    "url": "",
    "version": "0.0.0",
    "filename": "src/apiv1.js"
  }
] });