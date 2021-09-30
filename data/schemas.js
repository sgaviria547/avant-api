const customer_sh = {
    "type": "object",
    "properties": {
      "account_information": {
        "type": "array",
        "items": [
          {
            "type": "object",
            "properties": {
              "product_uuid": {
                "type": "string"
              },
              "product_type": {
                "type": "string"
              },
              "product_status": {
                "type": "string"
              }
            },
            "required": [
              "product_uuid",
              "product_type",
              "product_status"
            ]
          },
          {
            "type": "object",
            "properties": {
              "product_uuid": {
                "type": "string"
              },
              "product_type": {
                "type": "string"
              },
              "product_status": {
                "type": "string"
              }
            },
            "required": [
              "product_uuid",
              "product_type",
              "product_status"
            ]
          }
        ]
      }
    },
    "required": [
      "account_information"
    ]
}

const matches_sh = {
    "type": "object",
    "properties": {
      "matched_identities": {
        "type": "array",
        "items": [
          {
            "type": "object",
            "properties": {
              "identity_info": {
                "type": "object",
                "properties": {
                  "customer_uuid": {
                    "type": "string"
                  },
                  "status": {
                    "type": "null"
                  }
                },
                "required": [
                  "customer_uuid",
                  "status"
                ]
              },
              "match_types": {
                "type": "array",
                "items": [
                  {
                    "type": "string"
                  }
                ]
              }
            },
            "required": [
              "identity_info",
              "match_types"
            ]
          }
        ]
      }
    },
    "required": [
      "matched_identities"
    ]
}

const update_identity_sh = {
    "type": "object",
    "properties": {
      "output": {
        "type": "object",
        "properties": {
          "uuid": {
            "type": "string"
          },
          "status": {
            "type": "null"
          }
        },
        "required": [
          "uuid",
          "status"
        ]
      }
    },
    "required": [
      "output"
    ]
}

const profile_info_sh = {
    "$schema": "http://json-schema.org/draft-04/schema#",
    "type": "object",
    "properties": {
      "profile_information": {
        "type": "object",
        "properties": {
          "customer_uuid": {
            "type": "string"
          },
          "address": {
            "type": "array",
            "items": [
              {
                "type": "object",
                "properties": {
                  "uuid": {
                    "type": "string"
                  },
                  "address_type": {
                    "type": "string"
                  },
                  "is_primary": {
                    "type": "boolean"
                  },
                  "address_1": {
                    "type": "string"
                  },
                  "address_2": {
                    "type": "null"
                  },
                  "address_3": {
                    "type": "null"
                  },
                  "city": {
                    "type": "string"
                  },
                  "state": {
                    "type": "string"
                  },
                  "zip": {
                    "type": "string"
                  },
                  "zip4": {
                    "type": "null"
                  },
                  "time_at_address": {
                    "type": "null"
                  },
                  "rent_or_own": {
                    "type": "string"
                  },
                  "address_is_bad": {
                    "type": "boolean"
                  }
                },
                "required": [
                  "uuid",
                  "address_type",
                  "is_primary",
                  "address_1",
                  "address_2",
                  "address_3",
                  "city",
                  "state",
                  "zip",
                  "zip4",
                  "time_at_address",
                  "rent_or_own",
                  "address_is_bad"
                ]
              }
            ]
          },
          "payment_methods": {
            "type": "object",
            "properties": {
              "bank_accounts": {
                "type": "array",
                "items": [
                  {
                    "type": "object",
                    "properties": {
                      "uuid": {
                        "type": "string"
                      },
                      "name": {
                        "type": "null"
                      },
                      "account_type": {
                        "type": "string"
                      },
                      "routing_number": {
                        "type": "string"
                      },
                      "account_number": {
                        "type": "string"
                      },
                      "account_number_last_4": {
                        "type": "string"
                      },
                      "created_at": {
                        "type": "string"
                      },
                      "bank_zip": {
                        "type": "null"
                      },
                      "bank_state": {
                        "type": "null"
                      },
                      "bank_city": {
                        "type": "null"
                      }
                    },
                    "required": [
                      "uuid",
                      "name",
                      "account_type",
                      "routing_number",
                      "account_number",
                      "account_number_last_4",
                      "created_at",
                      "bank_zip",
                      "bank_state",
                      "bank_city"
                    ]
                  },
                  {
                    "type": "object",
                    "properties": {
                      "uuid": {
                        "type": "string"
                      },
                      "name": {
                        "type": "null"
                      },
                      "account_type": {
                        "type": "string"
                      },
                      "routing_number": {
                        "type": "string"
                      },
                      "account_number": {
                        "type": "string"
                      },
                      "account_number_last_4": {
                        "type": "string"
                      },
                      "created_at": {
                        "type": "string"
                      },
                      "bank_zip": {
                        "type": "null"
                      },
                      "bank_state": {
                        "type": "null"
                      },
                      "bank_city": {
                        "type": "null"
                      }
                    },
                    "required": [
                      "uuid",
                      "name",
                      "account_type",
                      "routing_number",
                      "account_number",
                      "account_number_last_4",
                      "created_at",
                      "bank_zip",
                      "bank_state",
                      "bank_city"
                    ]
                  },
                  {
                    "type": "object",
                    "properties": {
                      "uuid": {
                        "type": "string"
                      },
                      "name": {
                        "type": "null"
                      },
                      "account_type": {
                        "type": "string"
                      },
                      "routing_number": {
                        "type": "string"
                      },
                      "account_number": {
                        "type": "string"
                      },
                      "account_number_last_4": {
                        "type": "string"
                      },
                      "created_at": {
                        "type": "string"
                      },
                      "bank_zip": {
                        "type": "null"
                      },
                      "bank_state": {
                        "type": "null"
                      },
                      "bank_city": {
                        "type": "null"
                      }
                    },
                    "required": [
                      "uuid",
                      "name",
                      "account_type",
                      "routing_number",
                      "account_number",
                      "account_number_last_4",
                      "created_at",
                      "bank_zip",
                      "bank_state",
                      "bank_city"
                    ]
                  }
                ]
              },
              "debit_cards": {
                "type": "array",
                "items": {}
              }
            },
            "required": [
              "bank_accounts",
              "debit_cards"
            ]
          },
          "consent": {
            "type": "object",
            "properties": {
              "consents": {
                "type": "object",
                "properties": {
                  "needs_to_create_own_password": {
                    "type": "boolean"
                  }
                },
                "required": [
                  "needs_to_create_own_password"
                ]
              },
              "do_not_call": {
                "type": "boolean"
              },
              "do_not_email": {
                "type": "boolean"
              },
              "do_not_robocall": {
                "type": "boolean"
              },
              "do_not_mail": {
                "type": "boolean"
              },
              "do_not_sms": {
                "type": "boolean"
              },
              "do_not_marketing_robocall": {
                "type": "boolean"
              },
              "do_not_share_information": {
                "type": "boolean"
              },
              "electronic_communications_consent": {
                "type": "boolean"
              },
              "do_not_contact_bk": {
                "type": "boolean"
              },
              "cease_and_desist": {
                "type": "boolean"
              },
              "creditworthiness_information_sharing_consent": {
                "type": "boolean"
              },
              "affiliates_marketing_consent": {
                "type": "boolean"
              },
              "non_affiliates_marketing_consent": {
                "type": "boolean"
              }
            },
            "required": [
              "consents",
              "do_not_call",
              "do_not_email",
              "do_not_robocall",
              "do_not_mail",
              "do_not_sms",
              "do_not_marketing_robocall",
              "do_not_share_information",
              "electronic_communications_consent",
              "do_not_contact_bk",
              "cease_and_desist",
              "creditworthiness_information_sharing_consent",
              "affiliates_marketing_consent",
              "non_affiliates_marketing_consent"
            ]
          },
          "income": {
            "type": "object",
            "properties": {
              "income_type": {
                "type": "string"
              },
              "monthly_net_income_cents": {
                "type": "integer"
              },
              "monthly_gross_income_cents": {
                "type": "integer"
              },
              "housing_expense_cents": {
                "type": "integer"
              },
              "pay_frequency": {
                "type": "string"
              },
              "job_title": {
                "type": "string"
              }
            },
            "required": [
              "income_type",
              "monthly_net_income_cents",
              "monthly_gross_income_cents",
              "housing_expense_cents",
              "pay_frequency",
              "job_title"
            ]
          },
          "employment": {
            "type": "object",
            "properties": {
              "employer_name": {
                "type": "string"
              },
              "employer_phone": {
                "type": "string"
              },
              "do_not_call_employer_phone": {
                "type": "boolean"
              },
              "do_not_auto_dial_employer_phone": {
                "type": "boolean"
              },
              "do_not_sms_employer_phone": {
                "type": "boolean"
              },
              "employer_address_1": {
                "type": "null"
              },
              "employer_address_2": {
                "type": "null"
              },
              "employer_city": {
                "type": "null"
              },
              "employer_state": {
                "type": "null"
              },
              "employer_zip": {
                "type": "null"
              }
            },
            "required": [
              "employer_name",
              "employer_phone",
              "do_not_call_employer_phone",
              "do_not_auto_dial_employer_phone",
              "do_not_sms_employer_phone",
              "employer_address_1",
              "employer_address_2",
              "employer_city",
              "employer_state",
              "employer_zip"
            ]
          },
          "contact_info": {
            "type": "array",
            "items": [
              {
                "type": "object",
                "properties": {
                  "uuid": {
                    "type": "string"
                  },
                  "number": {
                    "type": "string"
                  },
                  "phone_type": {
                    "type": "string"
                  },
                  "do_not_call": {
                    "type": "boolean"
                  },
                  "do_not_auto_dial": {
                    "type": "boolean"
                  },
                  "active": {
                    "type": "boolean"
                  },
                  "ext": {
                    "type": "null"
                  },
                  "do_not_sms": {
                    "type": "boolean"
                  },
                  "primary_phone": {
                    "type": "boolean"
                  },
                  "employer_id": {
                    "type": "null"
                  },
                  "created_at": {
                    "type": "string"
                  },
                  "number_is_bad": {
                    "type": "boolean"
                  }
                },
                "required": [
                  "uuid",
                  "number",
                  "phone_type",
                  "do_not_call",
                  "do_not_auto_dial",
                  "active",
                  "ext",
                  "do_not_sms",
                  "primary_phone",
                  "employer_id",
                  "created_at",
                  "number_is_bad"
                ]
              },
              {
                "type": "object",
                "properties": {
                  "uuid": {
                    "type": "string"
                  },
                  "number": {
                    "type": "string"
                  },
                  "phone_type": {
                    "type": "string"
                  },
                  "do_not_call": {
                    "type": "boolean"
                  },
                  "do_not_auto_dial": {
                    "type": "boolean"
                  },
                  "active": {
                    "type": "boolean"
                  },
                  "ext": {
                    "type": "null"
                  },
                  "do_not_sms": {
                    "type": "boolean"
                  },
                  "primary_phone": {
                    "type": "boolean"
                  },
                  "employer_id": {
                    "type": "null"
                  },
                  "created_at": {
                    "type": "string"
                  },
                  "number_is_bad": {
                    "type": "boolean"
                  }
                },
                "required": [
                  "uuid",
                  "number",
                  "phone_type",
                  "do_not_call",
                  "do_not_auto_dial",
                  "active",
                  "ext",
                  "do_not_sms",
                  "primary_phone",
                  "employer_id",
                  "created_at",
                  "number_is_bad"
                ]
              },
              {
                "type": "object",
                "properties": {
                  "uuid": {
                    "type": "string"
                  },
                  "number": {
                    "type": "string"
                  },
                  "phone_type": {
                    "type": "string"
                  },
                  "do_not_call": {
                    "type": "boolean"
                  },
                  "do_not_auto_dial": {
                    "type": "boolean"
                  },
                  "active": {
                    "type": "boolean"
                  },
                  "ext": {
                    "type": "null"
                  },
                  "do_not_sms": {
                    "type": "boolean"
                  },
                  "primary_phone": {
                    "type": "boolean"
                  },
                  "employer_id": {
                    "type": "null"
                  },
                  "created_at": {
                    "type": "string"
                  },
                  "number_is_bad": {
                    "type": "boolean"
                  }
                },
                "required": [
                  "uuid",
                  "number",
                  "phone_type",
                  "do_not_call",
                  "do_not_auto_dial",
                  "active",
                  "ext",
                  "do_not_sms",
                  "primary_phone",
                  "employer_id",
                  "created_at",
                  "number_is_bad"
                ]
              },
              {
                "type": "object",
                "properties": {
                  "uuid": {
                    "type": "string"
                  },
                  "number": {
                    "type": "string"
                  },
                  "phone_type": {
                    "type": "string"
                  },
                  "do_not_call": {
                    "type": "boolean"
                  },
                  "do_not_auto_dial": {
                    "type": "boolean"
                  },
                  "active": {
                    "type": "boolean"
                  },
                  "ext": {
                    "type": "null"
                  },
                  "do_not_sms": {
                    "type": "boolean"
                  },
                  "primary_phone": {
                    "type": "boolean"
                  },
                  "employer_id": {
                    "type": "null"
                  },
                  "created_at": {
                    "type": "string"
                  },
                  "number_is_bad": {
                    "type": "boolean"
                  }
                },
                "required": [
                  "uuid",
                  "number",
                  "phone_type",
                  "do_not_call",
                  "do_not_auto_dial",
                  "active",
                  "ext",
                  "do_not_sms",
                  "primary_phone",
                  "employer_id",
                  "created_at",
                  "number_is_bad"
                ]
              },
              {
                "type": "object",
                "properties": {
                  "uuid": {
                    "type": "string"
                  },
                  "number": {
                    "type": "string"
                  },
                  "phone_type": {
                    "type": "string"
                  },
                  "do_not_call": {
                    "type": "boolean"
                  },
                  "do_not_auto_dial": {
                    "type": "boolean"
                  },
                  "active": {
                    "type": "boolean"
                  },
                  "ext": {
                    "type": "null"
                  },
                  "do_not_sms": {
                    "type": "boolean"
                  },
                  "primary_phone": {
                    "type": "boolean"
                  },
                  "employer_id": {
                    "type": "integer"
                  },
                  "created_at": {
                    "type": "string"
                  },
                  "number_is_bad": {
                    "type": "boolean"
                  }
                },
                "required": [
                  "uuid",
                  "number",
                  "phone_type",
                  "do_not_call",
                  "do_not_auto_dial",
                  "active",
                  "ext",
                  "do_not_sms",
                  "primary_phone",
                  "employer_id",
                  "created_at",
                  "number_is_bad"
                ]
              }
            ]
          }
        },
        "required": [
          "customer_uuid",
          "address",
          "payment_methods",
          "consent",
          "income",
          "employment",
          "contact_info"
        ]
      }
    },
    "required": [
      "profile_information"
    ]
  }

const update_profile_info_sh = {
    "type": "object",
    "properties": {
      "profile_information": {
        "type": "object",
        "properties": {
          "contact_info": {
            "type": "object",
            "properties": {
              "phone_uuids": {
                "type": "array",
                "items": {}
              },
              "address_uuid": {
                "type": "string"
              }
            },
            "required": [
              "phone_uuids",
              "address_uuid"
            ]
          },
          "payment_methods": {
            "type": "object",
            "properties": {
              "bank_account_uuid": {
                "type": "string"
              }
            },
            "required": [
              "bank_account_uuid"
            ]
          },
          "employment_uuid": {
            "type": "null"
          }
        },
        "required": [
          "contact_info",
          "payment_methods",
          "employment_uuid"
        ]
      }
    },
    "required": [
      "profile_information"
    ]
  }

exports.customer_sh = customer_sh;
exports.matches_sh = matches_sh;
exports.update_identity_sh = update_identity_sh;
exports.profile_info_sh = profile_info_sh;
exports.update_profile_info_sh = update_profile_info_sh;
