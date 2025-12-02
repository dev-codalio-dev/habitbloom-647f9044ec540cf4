const api = {
  "openapi": "3.0.3",
  "components": {
    "schemas": {
      "active_storage_attachment": {
        "x-rhino-model": {
          "model": "active_storage_attachment",
          "modelPlural": "active_storage/attachments",
          "name": "activeStorage::Attachment",
          "pluralName": "activeStorage::Attachments",
          "readableName": "Attachment",
          "pluralReadableName": "Attachments",
          "ownedBy": null,
          "singular": false,
          "path": "/api/attachments",
          "searchable": false
        },
        "type": "object",
        "properties": {
          "id": {
            "x-rhino-attribute": {
              "name": "id",
              "readableName": "Id",
              "readable": true,
              "creatable": false,
              "updatable": false
            },
            "readOnly": true,
            "nullable": false,
            "type": "identifier"
          },
          "name": {
            "x-rhino-attribute": {
              "name": "name",
              "readableName": "Name",
              "readable": true,
              "creatable": true,
              "updatable": true
            },
            "nullable": false,
            "type": "string"
          },
          "record_type": {
            "x-rhino-attribute": {
              "name": "record_type",
              "readableName": "Record Type",
              "readable": true,
              "creatable": true,
              "updatable": true
            },
            "nullable": false,
            "type": "string"
          },
          "created_at": {
            "x-rhino-attribute": {
              "name": "created_at",
              "readableName": "Created At",
              "readable": true,
              "creatable": false,
              "updatable": false
            },
            "readOnly": true,
            "nullable": false,
            "type": "string",
            "format": "datetime"
          },
          "url": {
            "x-rhino-attribute": {
              "name": "url",
              "readableName": "Url",
              "readable": true,
              "creatable": true,
              "updatable": true
            },
            "nullable": true
          },
          "url_attachment": {
            "x-rhino-attribute": {
              "name": "url_attachment",
              "readableName": "Url Attachment",
              "readable": true,
              "creatable": true,
              "updatable": true
            },
            "nullable": true
          },
          "previews": {
            "x-rhino-attribute": {
              "name": "previews",
              "readableName": "Previews",
              "readable": true,
              "creatable": true,
              "updatable": true
            },
            "nullable": true,
            "default": {
            },
            "type": "json"
          },
          "representations": {
            "x-rhino-attribute": {
              "name": "representations",
              "readableName": "Representations",
              "readable": true,
              "creatable": true,
              "updatable": true
            },
            "nullable": true,
            "default": {
            },
            "type": "json"
          },
          "variants": {
            "x-rhino-attribute": {
              "name": "variants",
              "readableName": "Variants",
              "readable": true,
              "creatable": true,
              "updatable": true
            },
            "nullable": true,
            "default": {
            },
            "type": "json"
          },
          "signed_id": {
            "x-rhino-attribute": {
              "name": "signed_id",
              "readableName": "Signed",
              "readable": true,
              "creatable": false,
              "updatable": false
            },
            "readOnly": true,
            "nullable": true,
            "type": "unknown"
          }
        },
        "required": [
          "name",
          "record_type"
        ]
      },
      "user": {
        "x-rhino-model": {
          "model": "user",
          "modelPlural": "users",
          "name": "user",
          "pluralName": "users",
          "readableName": "User",
          "pluralReadableName": "Users",
          "ownedBy": null,
          "singular": false,
          "path": "/api/users",
          "searchable": false
        },
        "type": "object",
        "properties": {
          "id": {
            "x-rhino-attribute": {
              "name": "id",
              "readableName": "Id",
              "readable": true,
              "creatable": false,
              "updatable": false
            },
            "readOnly": true,
            "nullable": false,
            "type": "identifier"
          },
          "name": {
            "x-rhino-attribute": {
              "name": "name",
              "readableName": "Name",
              "readable": true,
              "creatable": true,
              "updatable": true
            },
            "nullable": true,
            "type": "string"
          },
          "nickname": {
            "x-rhino-attribute": {
              "name": "nickname",
              "readableName": "Nickname",
              "readable": true,
              "creatable": true,
              "updatable": true
            },
            "nullable": true,
            "type": "string"
          },
          "email": {
            "x-rhino-attribute": {
              "name": "email",
              "readableName": "Email",
              "readable": true,
              "creatable": true,
              "updatable": false
            },
            "nullable": false,
            "type": "string",
            "pattern": "^[^@\\s]+@[^@\\s]+$"
          },
          "image": {
            "x-rhino-attribute": {
              "name": "image",
              "readableName": "Image",
              "readable": true,
              "creatable": false,
              "updatable": false
            },
            "readOnly": true,
            "nullable": true,
            "type": "string"
          }
        },
        "required": [
          "email"
        ]
      },
      "account": {
        "x-rhino-model": {
          "model": "account",
          "modelPlural": "accounts",
          "name": "account",
          "pluralName": "accounts",
          "readableName": "Account",
          "pluralReadableName": "Accounts",
          "ownedBy": "global",
          "singular": true,
          "path": "/api/account",
          "searchable": false
        },
        "type": "object",
        "properties": {
          "id": {
            "x-rhino-attribute": {
              "name": "id",
              "readableName": "Id",
              "readable": true,
              "creatable": false,
              "updatable": false
            },
            "readOnly": true,
            "nullable": false,
            "type": "identifier"
          },
          "name": {
            "x-rhino-attribute": {
              "name": "name",
              "readableName": "Name",
              "readable": true,
              "creatable": true,
              "updatable": true
            },
            "nullable": true,
            "type": "string"
          },
          "nickname": {
            "x-rhino-attribute": {
              "name": "nickname",
              "readableName": "Nickname",
              "readable": true,
              "creatable": true,
              "updatable": true
            },
            "nullable": true,
            "type": "string"
          },
          "email": {
            "x-rhino-attribute": {
              "name": "email",
              "readableName": "Email",
              "readable": true,
              "creatable": true,
              "updatable": false
            },
            "nullable": false,
            "type": "string",
            "pattern": "^[^@\\s]+@[^@\\s]+$"
          },
          "image": {
            "x-rhino-attribute": {
              "name": "image",
              "readableName": "Image",
              "readable": true,
              "creatable": false,
              "updatable": false
            },
            "readOnly": true,
            "nullable": true,
            "type": "string"
          },
          "users_roles": {
            "x-rhino-attribute": {
              "name": "users_roles",
              "readableName": "Users Roles",
              "readable": true,
              "creatable": false,
              "updatable": false
            },
            "readOnly": true,
            "nullable": true,
            "type": "array",
            "items": {
              "type": "reference",
              "anyOf": [
                {
                  "$ref": "#/components/schemas/users_role"
                }
              ],
              "x-rhino-attribute-array": {
              }
            }
          }
        },
        "required": [
          "email"
        ]
      },
      "organization": {
        "x-rhino-model": {
          "model": "organization",
          "modelPlural": "organizations",
          "name": "organization",
          "pluralName": "organizations",
          "readableName": "Organization",
          "pluralReadableName": "Organizations",
          "ownedBy": null,
          "singular": false,
          "path": "/api/organizations",
          "searchable": false
        },
        "type": "object",
        "properties": {
          "id": {
            "x-rhino-attribute": {
              "name": "id",
              "readableName": "Id",
              "readable": true,
              "creatable": false,
              "updatable": false
            },
            "readOnly": true,
            "nullable": false,
            "type": "identifier"
          },
          "name": {
            "x-rhino-attribute": {
              "name": "name",
              "readableName": "Name",
              "readable": true,
              "creatable": true,
              "updatable": true
            },
            "nullable": true,
            "type": "string"
          },
          "created_at": {
            "x-rhino-attribute": {
              "name": "created_at",
              "readableName": "Created At",
              "readable": true,
              "creatable": false,
              "updatable": false
            },
            "readOnly": true,
            "nullable": false,
            "type": "string",
            "format": "datetime"
          },
          "updated_at": {
            "x-rhino-attribute": {
              "name": "updated_at",
              "readableName": "Updated At",
              "readable": true,
              "creatable": false,
              "updatable": false
            },
            "readOnly": true,
            "nullable": false,
            "type": "string",
            "format": "datetime"
          },
          "users_roles": {
            "x-rhino-attribute": {
              "name": "users_roles",
              "readableName": "Users Roles",
              "readable": true,
              "creatable": false,
              "updatable": false
            },
            "readOnly": true,
            "nullable": true,
            "type": "array",
            "items": {
              "type": "reference",
              "anyOf": [
                {
                  "$ref": "#/components/schemas/users_role"
                }
              ],
              "x-rhino-attribute-array": {
              }
            }
          }
        }
      },
      "users_role": {
        "x-rhino-model": {
          "model": "users_role",
          "modelPlural": "users_roles",
          "name": "usersRole",
          "pluralName": "usersRoles",
          "readableName": "Users role",
          "pluralReadableName": "Users roles",
          "ownedBy": "organization",
          "singular": false,
          "path": "/api/users_roles",
          "searchable": false
        },
        "type": "object",
        "properties": {
          "id": {
            "x-rhino-attribute": {
              "name": "id",
              "readableName": "Id",
              "readable": true,
              "creatable": false,
              "updatable": false
            },
            "readOnly": true,
            "nullable": false,
            "type": "identifier"
          },
          "created_at": {
            "x-rhino-attribute": {
              "name": "created_at",
              "readableName": "Created At",
              "readable": true,
              "creatable": false,
              "updatable": false
            },
            "readOnly": true,
            "nullable": false,
            "type": "string",
            "format": "datetime"
          },
          "updated_at": {
            "x-rhino-attribute": {
              "name": "updated_at",
              "readableName": "Updated At",
              "readable": true,
              "creatable": false,
              "updatable": false
            },
            "readOnly": true,
            "nullable": false,
            "type": "string",
            "format": "datetime"
          },
          "user": {
            "x-rhino-attribute": {
              "name": "user",
              "readableName": "User",
              "readable": true,
              "creatable": true,
              "updatable": false
            },
            "nullable": false,
            "type": "reference",
            "anyOf": [
              {
                "$ref": "#/components/schemas/user"
              }
            ]
          },
          "role": {
            "x-rhino-attribute": {
              "name": "role",
              "readableName": "Role",
              "readable": true,
              "creatable": true,
              "updatable": true
            },
            "nullable": false,
            "type": "reference",
            "anyOf": [
              {
                "$ref": "#/components/schemas/role"
              }
            ]
          },
          "organization": {
            "x-rhino-attribute": {
              "name": "organization",
              "readableName": "Organization",
              "readable": true,
              "creatable": true,
              "updatable": false
            },
            "nullable": false,
            "type": "reference",
            "anyOf": [
              {
                "$ref": "#/components/schemas/organization"
              }
            ]
          }
        },
        "required": [
          "user",
          "role",
          "organization"
        ]
      },
      "role": {
        "x-rhino-model": {
          "model": "role",
          "modelPlural": "roles",
          "name": "role",
          "pluralName": "roles",
          "readableName": "Role",
          "pluralReadableName": "Roles",
          "ownedBy": "global",
          "singular": false,
          "path": "/api/roles",
          "searchable": false
        },
        "type": "object",
        "properties": {
          "id": {
            "x-rhino-attribute": {
              "name": "id",
              "readableName": "Id",
              "readable": true,
              "creatable": false,
              "updatable": false
            },
            "readOnly": true,
            "nullable": false,
            "type": "identifier"
          },
          "name": {
            "x-rhino-attribute": {
              "name": "name",
              "readableName": "Name",
              "readable": true,
              "creatable": true,
              "updatable": true
            },
            "nullable": false,
            "type": "string",
            "pattern": "^[a-zA-Z_]+$"
          },
          "created_at": {
            "x-rhino-attribute": {
              "name": "created_at",
              "readableName": "Created At",
              "readable": true,
              "creatable": false,
              "updatable": false
            },
            "readOnly": true,
            "nullable": false,
            "type": "string",
            "format": "datetime"
          },
          "updated_at": {
            "x-rhino-attribute": {
              "name": "updated_at",
              "readableName": "Updated At",
              "readable": true,
              "creatable": false,
              "updatable": false
            },
            "readOnly": true,
            "nullable": false,
            "type": "string",
            "format": "datetime"
          }
        },
        "required": [
          "name"
        ]
      },
      "users_role_invite": {
        "x-rhino-model": {
          "model": "users_role_invite",
          "modelPlural": "users_role_invites",
          "name": "usersRoleInvite",
          "pluralName": "usersRoleInvites",
          "readableName": "Users role invite",
          "pluralReadableName": "Users role invites",
          "ownedBy": "organization",
          "singular": false,
          "path": "/api/users_role_invites",
          "searchable": false
        },
        "type": "object",
        "properties": {
          "id": {
            "x-rhino-attribute": {
              "name": "id",
              "readableName": "Id",
              "readable": true,
              "creatable": false,
              "updatable": false
            },
            "readOnly": true,
            "nullable": false,
            "type": "identifier"
          },
          "email": {
            "x-rhino-attribute": {
              "name": "email",
              "readableName": "Email",
              "readable": true,
              "creatable": true,
              "updatable": true
            },
            "nullable": false,
            "type": "string"
          },
          "created_at": {
            "x-rhino-attribute": {
              "name": "created_at",
              "readableName": "Created At",
              "readable": true,
              "creatable": false,
              "updatable": false
            },
            "readOnly": true,
            "nullable": false,
            "type": "string",
            "format": "datetime"
          },
          "updated_at": {
            "x-rhino-attribute": {
              "name": "updated_at",
              "readableName": "Updated At",
              "readable": true,
              "creatable": false,
              "updatable": false
            },
            "readOnly": true,
            "nullable": false,
            "type": "string",
            "format": "datetime"
          },
          "role": {
            "x-rhino-attribute": {
              "name": "role",
              "readableName": "Role",
              "readable": true,
              "creatable": true,
              "updatable": true
            },
            "nullable": false,
            "type": "reference",
            "anyOf": [
              {
                "$ref": "#/components/schemas/role"
              }
            ]
          },
          "organization": {
            "x-rhino-attribute": {
              "name": "organization",
              "readableName": "Organization",
              "readable": true,
              "creatable": true,
              "updatable": true
            },
            "nullable": false,
            "type": "reference",
            "anyOf": [
              {
                "$ref": "#/components/schemas/organization"
              }
            ]
          }
        },
        "required": [
          "email",
          "role",
          "organization"
        ]
      },
      "habit": {
        "x-rhino-model": {
          "model": "habit",
          "modelPlural": "habits",
          "name": "habit",
          "pluralName": "habits",
          "readableName": "Habit",
          "pluralReadableName": "Habits",
          "ownedBy": "organization",
          "singular": false,
          "path": "/api/habits",
          "searchable": false
        },
        "type": "object",
        "properties": {
          "id": {
            "x-rhino-attribute": {
              "name": "id",
              "readableName": "Id",
              "readable": true,
              "creatable": false,
              "updatable": false
            },
            "readOnly": true,
            "nullable": false,
            "type": "identifier"
          },
          "name": {
            "x-rhino-attribute": {
              "name": "name",
              "readableName": "Name",
              "readable": true,
              "creatable": true,
              "updatable": true
            },
            "nullable": false,
            "type": "string"
          },
          "description": {
            "x-rhino-attribute": {
              "name": "description",
              "readableName": "Description",
              "readable": true,
              "creatable": true,
              "updatable": true
            },
            "nullable": true,
            "type": "text"
          },
          "frequency_type": {
            "x-rhino-attribute": {
              "name": "frequency_type",
              "readableName": "Frequency Type",
              "readable": true,
              "creatable": true,
              "updatable": true
            },
            "nullable": false,
            "type": "string",
            "enum": [
              "daily",
              "weekly",
              "custom"
            ]
          },
          "frequency_value": {
            "x-rhino-attribute": {
              "name": "frequency_value",
              "readableName": "Frequency Value",
              "readable": true,
              "creatable": true,
              "updatable": true
            },
            "nullable": true,
            "default": {
            },
            "type": "jsonb"
          },
          "icon_name": {
            "x-rhino-attribute": {
              "name": "icon_name",
              "readableName": "Icon Name",
              "readable": true,
              "creatable": true,
              "updatable": true
            },
            "nullable": true,
            "type": "string"
          },
          "color_scheme": {
            "x-rhino-attribute": {
              "name": "color_scheme",
              "readableName": "Color Scheme",
              "readable": true,
              "creatable": true,
              "updatable": true
            },
            "nullable": true,
            "type": "string"
          },
          "start_date": {
            "x-rhino-attribute": {
              "name": "start_date",
              "readableName": "Start Date",
              "readable": true,
              "creatable": true,
              "updatable": true
            },
            "nullable": false,
            "type": "string",
            "format": "date"
          },
          "active": {
            "x-rhino-attribute": {
              "name": "active",
              "readableName": "Active",
              "readable": true,
              "creatable": true,
              "updatable": true
            },
            "nullable": true,
            "default": true,
            "type": "boolean"
          },
          "created_at": {
            "x-rhino-attribute": {
              "name": "created_at",
              "readableName": "Created At",
              "readable": true,
              "creatable": false,
              "updatable": false
            },
            "readOnly": true,
            "nullable": false,
            "type": "string",
            "format": "datetime"
          },
          "updated_at": {
            "x-rhino-attribute": {
              "name": "updated_at",
              "readableName": "Updated At",
              "readable": true,
              "creatable": false,
              "updatable": false
            },
            "readOnly": true,
            "nullable": false,
            "type": "string",
            "format": "datetime"
          },
          "organization": {
            "x-rhino-attribute": {
              "name": "organization",
              "readableName": "Organization",
              "readable": true,
              "creatable": true,
              "updatable": true
            },
            "nullable": false,
            "type": "reference",
            "anyOf": [
              {
                "$ref": "#/components/schemas/organization"
              }
            ]
          },
          "user": {
            "x-rhino-attribute": {
              "name": "user",
              "readableName": "User",
              "readable": true,
              "creatable": true,
              "updatable": true
            },
            "nullable": false,
            "type": "reference",
            "anyOf": [
              {
                "$ref": "#/components/schemas/user"
              }
            ]
          }
        },
        "required": [
          "name",
          "frequency_type",
          "start_date",
          "organization",
          "user"
        ]
      },
      "habit_completion": {
        "x-rhino-model": {
          "model": "habit_completion",
          "modelPlural": "habit_completions",
          "name": "habitCompletion",
          "pluralName": "habitCompletions",
          "readableName": "Habit completion",
          "pluralReadableName": "Habit completions",
          "ownedBy": "habit",
          "singular": false,
          "path": "/api/habit_completions",
          "searchable": false
        },
        "type": "object",
        "properties": {
          "id": {
            "x-rhino-attribute": {
              "name": "id",
              "readableName": "Id",
              "readable": true,
              "creatable": false,
              "updatable": false
            },
            "readOnly": true,
            "nullable": false,
            "type": "identifier"
          },
          "completion_date": {
            "x-rhino-attribute": {
              "name": "completion_date",
              "readableName": "Completion Date",
              "readable": true,
              "creatable": true,
              "updatable": true
            },
            "nullable": false,
            "type": "string",
            "format": "date"
          },
          "status": {
            "x-rhino-attribute": {
              "name": "status",
              "readableName": "Status",
              "readable": true,
              "creatable": true,
              "updatable": true
            },
            "nullable": false,
            "default": "completed",
            "type": "string",
            "enum": [
              "completed",
              "skipped",
              "missed"
            ]
          },
          "created_at": {
            "x-rhino-attribute": {
              "name": "created_at",
              "readableName": "Created At",
              "readable": true,
              "creatable": false,
              "updatable": false
            },
            "readOnly": true,
            "nullable": false,
            "type": "string",
            "format": "datetime"
          },
          "updated_at": {
            "x-rhino-attribute": {
              "name": "updated_at",
              "readableName": "Updated At",
              "readable": true,
              "creatable": false,
              "updatable": false
            },
            "readOnly": true,
            "nullable": false,
            "type": "string",
            "format": "datetime"
          },
          "habit": {
            "x-rhino-attribute": {
              "name": "habit",
              "readableName": "Habit",
              "readable": true,
              "creatable": true,
              "updatable": true
            },
            "nullable": false,
            "type": "reference",
            "anyOf": [
              {
                "$ref": "#/components/schemas/habit"
              }
            ]
          }
        },
        "required": [
          "completion_date",
          "status",
          "habit"
        ]
      },
      "icon": {
        "x-rhino-model": {
          "model": "icon",
          "modelPlural": "icons",
          "name": "icon",
          "pluralName": "icons",
          "readableName": "Icon",
          "pluralReadableName": "Icons",
          "ownedBy": "global",
          "singular": false,
          "path": "/api/icons",
          "searchable": false
        },
        "type": "object",
        "properties": {
          "id": {
            "x-rhino-attribute": {
              "name": "id",
              "readableName": "Id",
              "readable": true,
              "creatable": false,
              "updatable": false
            },
            "readOnly": true,
            "nullable": false,
            "type": "identifier"
          },
          "name": {
            "x-rhino-attribute": {
              "name": "name",
              "readableName": "Name",
              "readable": true,
              "creatable": true,
              "updatable": true
            },
            "nullable": false,
            "type": "string"
          },
          "created_at": {
            "x-rhino-attribute": {
              "name": "created_at",
              "readableName": "Created At",
              "readable": true,
              "creatable": false,
              "updatable": false
            },
            "readOnly": true,
            "nullable": false,
            "type": "string",
            "format": "datetime"
          },
          "updated_at": {
            "x-rhino-attribute": {
              "name": "updated_at",
              "readableName": "Updated At",
              "readable": true,
              "creatable": false,
              "updatable": false
            },
            "readOnly": true,
            "nullable": false,
            "type": "string",
            "format": "datetime"
          }
        },
        "required": [
          "name"
        ]
      },
      "motivational_message": {
        "x-rhino-model": {
          "model": "motivational_message",
          "modelPlural": "motivational_messages",
          "name": "motivationalMessage",
          "pluralName": "motivationalMessages",
          "readableName": "Motivational message",
          "pluralReadableName": "Motivational messages",
          "ownedBy": "global",
          "singular": false,
          "path": "/api/motivational_messages",
          "searchable": false
        },
        "type": "object",
        "properties": {
          "id": {
            "x-rhino-attribute": {
              "name": "id",
              "readableName": "Id",
              "readable": true,
              "creatable": false,
              "updatable": false
            },
            "readOnly": true,
            "nullable": false,
            "type": "identifier"
          },
          "content": {
            "x-rhino-attribute": {
              "name": "content",
              "readableName": "Content",
              "readable": true,
              "creatable": true,
              "updatable": true
            },
            "nullable": false,
            "type": "text"
          },
          "created_at": {
            "x-rhino-attribute": {
              "name": "created_at",
              "readableName": "Created At",
              "readable": true,
              "creatable": false,
              "updatable": false
            },
            "readOnly": true,
            "nullable": false,
            "type": "string",
            "format": "datetime"
          },
          "updated_at": {
            "x-rhino-attribute": {
              "name": "updated_at",
              "readableName": "Updated At",
              "readable": true,
              "creatable": false,
              "updatable": false
            },
            "readOnly": true,
            "nullable": false,
            "type": "string",
            "format": "datetime"
          }
        },
        "required": [
          "content"
        ]
      }
    }
  },
  "paths": {
    "/api/attachments": {
      "get": {
        "operationId": "active_storage_attachment-index",
        "parameters": [

        ],
        "responses": {
          "200": {
            "description": "OK",
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/active_storage_attachment"
                }
              }
            }
          },
          "400": {
            "description": "Bad Request",
            "content": {
              "application/json": {
              }
            }
          },
          "403": {
            "description": "Forbidden",
            "content": {
              "application/json": {
              }
            }
          },
          "422": {
            "description": "Unprocessable Content",
            "content": {
              "application/json": {
              }
            }
          }
        },
        "tags": [
          "active_storage_attachment"
        ]
      },
      "post": {
        "operationId": "active_storage_attachment-create",
        "parameters": [

        ],
        "responses": {
          "200": {
            "description": "OK",
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/active_storage_attachment"
                }
              }
            }
          },
          "400": {
            "description": "Bad Request",
            "content": {
              "application/json": {
              }
            }
          },
          "403": {
            "description": "Forbidden",
            "content": {
              "application/json": {
              }
            }
          },
          "422": {
            "description": "Unprocessable Content",
            "content": {
              "application/json": {
              }
            }
          }
        },
        "tags": [
          "active_storage_attachment"
        ]
      }
    },
    "/api/attachments/:id": {
      "get": {
        "operationId": "active_storage_attachment-show",
        "parameters": [
          {
            "name": "id",
            "in": "path",
            "required": true
          }
        ],
        "responses": {
          "200": {
            "description": "OK",
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/active_storage_attachment"
                }
              }
            }
          },
          "400": {
            "description": "Bad Request",
            "content": {
              "application/json": {
              }
            }
          },
          "403": {
            "description": "Forbidden",
            "content": {
              "application/json": {
              }
            }
          },
          "422": {
            "description": "Unprocessable Content",
            "content": {
              "application/json": {
              }
            }
          }
        },
        "tags": [
          "active_storage_attachment"
        ]
      },
      "patch": {
        "operationId": "active_storage_attachment-update",
        "parameters": [
          {
            "name": "id",
            "in": "path",
            "required": true
          }
        ],
        "responses": {
          "200": {
            "description": "OK",
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/active_storage_attachment"
                }
              }
            }
          },
          "400": {
            "description": "Bad Request",
            "content": {
              "application/json": {
              }
            }
          },
          "403": {
            "description": "Forbidden",
            "content": {
              "application/json": {
              }
            }
          },
          "422": {
            "description": "Unprocessable Content",
            "content": {
              "application/json": {
              }
            }
          }
        },
        "tags": [
          "active_storage_attachment"
        ]
      },
      "put": {
        "operationId": "active_storage_attachment-update",
        "parameters": [
          {
            "name": "id",
            "in": "path",
            "required": true
          }
        ],
        "responses": {
          "200": {
            "description": "OK",
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/active_storage_attachment"
                }
              }
            }
          },
          "400": {
            "description": "Bad Request",
            "content": {
              "application/json": {
              }
            }
          },
          "403": {
            "description": "Forbidden",
            "content": {
              "application/json": {
              }
            }
          },
          "422": {
            "description": "Unprocessable Content",
            "content": {
              "application/json": {
              }
            }
          }
        },
        "tags": [
          "active_storage_attachment"
        ]
      },
      "delete": {
        "operationId": "active_storage_attachment-destroy",
        "parameters": [
          {
            "name": "id",
            "in": "path",
            "required": true
          }
        ],
        "responses": {
          "200": {
            "description": "OK",
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/active_storage_attachment"
                }
              }
            }
          },
          "400": {
            "description": "Bad Request",
            "content": {
              "application/json": {
              }
            }
          },
          "403": {
            "description": "Forbidden",
            "content": {
              "application/json": {
              }
            }
          },
          "422": {
            "description": "Unprocessable Content",
            "content": {
              "application/json": {
              }
            }
          }
        },
        "tags": [
          "active_storage_attachment"
        ]
      }
    },
    "/api/users": {
      "get": {
        "operationId": "user-index",
        "parameters": [

        ],
        "responses": {
          "200": {
            "description": "OK",
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/user"
                }
              }
            }
          },
          "400": {
            "description": "Bad Request",
            "content": {
              "application/json": {
              }
            }
          },
          "403": {
            "description": "Forbidden",
            "content": {
              "application/json": {
              }
            }
          },
          "422": {
            "description": "Unprocessable Content",
            "content": {
              "application/json": {
              }
            }
          }
        },
        "tags": [
          "user"
        ]
      },
      "post": {
        "operationId": "user-create",
        "parameters": [

        ],
        "responses": {
          "200": {
            "description": "OK",
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/user"
                }
              }
            }
          },
          "400": {
            "description": "Bad Request",
            "content": {
              "application/json": {
              }
            }
          },
          "403": {
            "description": "Forbidden",
            "content": {
              "application/json": {
              }
            }
          },
          "422": {
            "description": "Unprocessable Content",
            "content": {
              "application/json": {
              }
            }
          }
        },
        "tags": [
          "user"
        ]
      }
    },
    "/api/users/:id": {
      "get": {
        "operationId": "user-show",
        "parameters": [
          {
            "name": "id",
            "in": "path",
            "required": true
          }
        ],
        "responses": {
          "200": {
            "description": "OK",
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/user"
                }
              }
            }
          },
          "400": {
            "description": "Bad Request",
            "content": {
              "application/json": {
              }
            }
          },
          "403": {
            "description": "Forbidden",
            "content": {
              "application/json": {
              }
            }
          },
          "422": {
            "description": "Unprocessable Content",
            "content": {
              "application/json": {
              }
            }
          }
        },
        "tags": [
          "user"
        ]
      },
      "patch": {
        "operationId": "user-update",
        "parameters": [
          {
            "name": "id",
            "in": "path",
            "required": true
          }
        ],
        "responses": {
          "200": {
            "description": "OK",
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/user"
                }
              }
            }
          },
          "400": {
            "description": "Bad Request",
            "content": {
              "application/json": {
              }
            }
          },
          "403": {
            "description": "Forbidden",
            "content": {
              "application/json": {
              }
            }
          },
          "422": {
            "description": "Unprocessable Content",
            "content": {
              "application/json": {
              }
            }
          }
        },
        "tags": [
          "user"
        ]
      },
      "put": {
        "operationId": "user-update",
        "parameters": [
          {
            "name": "id",
            "in": "path",
            "required": true
          }
        ],
        "responses": {
          "200": {
            "description": "OK",
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/user"
                }
              }
            }
          },
          "400": {
            "description": "Bad Request",
            "content": {
              "application/json": {
              }
            }
          },
          "403": {
            "description": "Forbidden",
            "content": {
              "application/json": {
              }
            }
          },
          "422": {
            "description": "Unprocessable Content",
            "content": {
              "application/json": {
              }
            }
          }
        },
        "tags": [
          "user"
        ]
      },
      "delete": {
        "operationId": "user-destroy",
        "parameters": [
          {
            "name": "id",
            "in": "path",
            "required": true
          }
        ],
        "responses": {
          "200": {
            "description": "OK",
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/user"
                }
              }
            }
          },
          "400": {
            "description": "Bad Request",
            "content": {
              "application/json": {
              }
            }
          },
          "403": {
            "description": "Forbidden",
            "content": {
              "application/json": {
              }
            }
          },
          "422": {
            "description": "Unprocessable Content",
            "content": {
              "application/json": {
              }
            }
          }
        },
        "tags": [
          "user"
        ]
      }
    },
    "/api/account": {
      "get": {
        "operationId": "account-show",
        "parameters": [

        ],
        "responses": {
          "200": {
            "description": "OK",
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/account"
                }
              }
            }
          },
          "400": {
            "description": "Bad Request",
            "content": {
              "application/json": {
              }
            }
          },
          "403": {
            "description": "Forbidden",
            "content": {
              "application/json": {
              }
            }
          },
          "422": {
            "description": "Unprocessable Content",
            "content": {
              "application/json": {
              }
            }
          }
        },
        "tags": [
          "account"
        ]
      },
      "patch": {
        "operationId": "account-update",
        "parameters": [

        ],
        "responses": {
          "200": {
            "description": "OK",
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/account"
                }
              }
            }
          },
          "400": {
            "description": "Bad Request",
            "content": {
              "application/json": {
              }
            }
          },
          "403": {
            "description": "Forbidden",
            "content": {
              "application/json": {
              }
            }
          },
          "422": {
            "description": "Unprocessable Content",
            "content": {
              "application/json": {
              }
            }
          }
        },
        "tags": [
          "account"
        ]
      },
      "put": {
        "operationId": "account-update",
        "parameters": [

        ],
        "responses": {
          "200": {
            "description": "OK",
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/account"
                }
              }
            }
          },
          "400": {
            "description": "Bad Request",
            "content": {
              "application/json": {
              }
            }
          },
          "403": {
            "description": "Forbidden",
            "content": {
              "application/json": {
              }
            }
          },
          "422": {
            "description": "Unprocessable Content",
            "content": {
              "application/json": {
              }
            }
          }
        },
        "tags": [
          "account"
        ]
      }
    },
    "/api/organizations": {
      "get": {
        "operationId": "organization-index",
        "parameters": [

        ],
        "responses": {
          "200": {
            "description": "OK",
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/organization"
                }
              }
            }
          },
          "400": {
            "description": "Bad Request",
            "content": {
              "application/json": {
              }
            }
          },
          "403": {
            "description": "Forbidden",
            "content": {
              "application/json": {
              }
            }
          },
          "422": {
            "description": "Unprocessable Content",
            "content": {
              "application/json": {
              }
            }
          }
        },
        "tags": [
          "organization"
        ]
      },
      "post": {
        "operationId": "organization-create",
        "parameters": [

        ],
        "responses": {
          "200": {
            "description": "OK",
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/organization"
                }
              }
            }
          },
          "400": {
            "description": "Bad Request",
            "content": {
              "application/json": {
              }
            }
          },
          "403": {
            "description": "Forbidden",
            "content": {
              "application/json": {
              }
            }
          },
          "422": {
            "description": "Unprocessable Content",
            "content": {
              "application/json": {
              }
            }
          }
        },
        "tags": [
          "organization"
        ]
      }
    },
    "/api/organizations/:id": {
      "get": {
        "operationId": "organization-show",
        "parameters": [
          {
            "name": "id",
            "in": "path",
            "required": true
          }
        ],
        "responses": {
          "200": {
            "description": "OK",
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/organization"
                }
              }
            }
          },
          "400": {
            "description": "Bad Request",
            "content": {
              "application/json": {
              }
            }
          },
          "403": {
            "description": "Forbidden",
            "content": {
              "application/json": {
              }
            }
          },
          "422": {
            "description": "Unprocessable Content",
            "content": {
              "application/json": {
              }
            }
          }
        },
        "tags": [
          "organization"
        ]
      },
      "patch": {
        "operationId": "organization-update",
        "parameters": [
          {
            "name": "id",
            "in": "path",
            "required": true
          }
        ],
        "responses": {
          "200": {
            "description": "OK",
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/organization"
                }
              }
            }
          },
          "400": {
            "description": "Bad Request",
            "content": {
              "application/json": {
              }
            }
          },
          "403": {
            "description": "Forbidden",
            "content": {
              "application/json": {
              }
            }
          },
          "422": {
            "description": "Unprocessable Content",
            "content": {
              "application/json": {
              }
            }
          }
        },
        "tags": [
          "organization"
        ]
      },
      "put": {
        "operationId": "organization-update",
        "parameters": [
          {
            "name": "id",
            "in": "path",
            "required": true
          }
        ],
        "responses": {
          "200": {
            "description": "OK",
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/organization"
                }
              }
            }
          },
          "400": {
            "description": "Bad Request",
            "content": {
              "application/json": {
              }
            }
          },
          "403": {
            "description": "Forbidden",
            "content": {
              "application/json": {
              }
            }
          },
          "422": {
            "description": "Unprocessable Content",
            "content": {
              "application/json": {
              }
            }
          }
        },
        "tags": [
          "organization"
        ]
      },
      "delete": {
        "operationId": "organization-destroy",
        "parameters": [
          {
            "name": "id",
            "in": "path",
            "required": true
          }
        ],
        "responses": {
          "200": {
            "description": "OK",
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/organization"
                }
              }
            }
          },
          "400": {
            "description": "Bad Request",
            "content": {
              "application/json": {
              }
            }
          },
          "403": {
            "description": "Forbidden",
            "content": {
              "application/json": {
              }
            }
          },
          "422": {
            "description": "Unprocessable Content",
            "content": {
              "application/json": {
              }
            }
          }
        },
        "tags": [
          "organization"
        ]
      }
    },
    "/api/users_roles": {
      "get": {
        "operationId": "users_role-index",
        "parameters": [

        ],
        "responses": {
          "200": {
            "description": "OK",
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/users_role"
                }
              }
            }
          },
          "400": {
            "description": "Bad Request",
            "content": {
              "application/json": {
              }
            }
          },
          "403": {
            "description": "Forbidden",
            "content": {
              "application/json": {
              }
            }
          },
          "422": {
            "description": "Unprocessable Content",
            "content": {
              "application/json": {
              }
            }
          }
        },
        "tags": [
          "users_role"
        ]
      },
      "post": {
        "operationId": "users_role-create",
        "parameters": [

        ],
        "responses": {
          "200": {
            "description": "OK",
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/users_role"
                }
              }
            }
          },
          "400": {
            "description": "Bad Request",
            "content": {
              "application/json": {
              }
            }
          },
          "403": {
            "description": "Forbidden",
            "content": {
              "application/json": {
              }
            }
          },
          "422": {
            "description": "Unprocessable Content",
            "content": {
              "application/json": {
              }
            }
          }
        },
        "tags": [
          "users_role"
        ]
      }
    },
    "/api/users_roles/:id": {
      "get": {
        "operationId": "users_role-show",
        "parameters": [
          {
            "name": "id",
            "in": "path",
            "required": true
          }
        ],
        "responses": {
          "200": {
            "description": "OK",
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/users_role"
                }
              }
            }
          },
          "400": {
            "description": "Bad Request",
            "content": {
              "application/json": {
              }
            }
          },
          "403": {
            "description": "Forbidden",
            "content": {
              "application/json": {
              }
            }
          },
          "422": {
            "description": "Unprocessable Content",
            "content": {
              "application/json": {
              }
            }
          }
        },
        "tags": [
          "users_role"
        ]
      },
      "patch": {
        "operationId": "users_role-update",
        "parameters": [
          {
            "name": "id",
            "in": "path",
            "required": true
          }
        ],
        "responses": {
          "200": {
            "description": "OK",
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/users_role"
                }
              }
            }
          },
          "400": {
            "description": "Bad Request",
            "content": {
              "application/json": {
              }
            }
          },
          "403": {
            "description": "Forbidden",
            "content": {
              "application/json": {
              }
            }
          },
          "422": {
            "description": "Unprocessable Content",
            "content": {
              "application/json": {
              }
            }
          }
        },
        "tags": [
          "users_role"
        ]
      },
      "put": {
        "operationId": "users_role-update",
        "parameters": [
          {
            "name": "id",
            "in": "path",
            "required": true
          }
        ],
        "responses": {
          "200": {
            "description": "OK",
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/users_role"
                }
              }
            }
          },
          "400": {
            "description": "Bad Request",
            "content": {
              "application/json": {
              }
            }
          },
          "403": {
            "description": "Forbidden",
            "content": {
              "application/json": {
              }
            }
          },
          "422": {
            "description": "Unprocessable Content",
            "content": {
              "application/json": {
              }
            }
          }
        },
        "tags": [
          "users_role"
        ]
      },
      "delete": {
        "operationId": "users_role-destroy",
        "parameters": [
          {
            "name": "id",
            "in": "path",
            "required": true
          }
        ],
        "responses": {
          "200": {
            "description": "OK",
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/users_role"
                }
              }
            }
          },
          "400": {
            "description": "Bad Request",
            "content": {
              "application/json": {
              }
            }
          },
          "403": {
            "description": "Forbidden",
            "content": {
              "application/json": {
              }
            }
          },
          "422": {
            "description": "Unprocessable Content",
            "content": {
              "application/json": {
              }
            }
          }
        },
        "tags": [
          "users_role"
        ]
      }
    },
    "/api/roles": {
      "get": {
        "operationId": "role-index",
        "parameters": [

        ],
        "responses": {
          "200": {
            "description": "OK",
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/role"
                }
              }
            }
          },
          "400": {
            "description": "Bad Request",
            "content": {
              "application/json": {
              }
            }
          },
          "403": {
            "description": "Forbidden",
            "content": {
              "application/json": {
              }
            }
          },
          "422": {
            "description": "Unprocessable Content",
            "content": {
              "application/json": {
              }
            }
          }
        },
        "tags": [
          "role"
        ]
      }
    },
    "/api/roles/:id": {
      "get": {
        "operationId": "role-show",
        "parameters": [
          {
            "name": "id",
            "in": "path",
            "required": true
          }
        ],
        "responses": {
          "200": {
            "description": "OK",
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/role"
                }
              }
            }
          },
          "400": {
            "description": "Bad Request",
            "content": {
              "application/json": {
              }
            }
          },
          "403": {
            "description": "Forbidden",
            "content": {
              "application/json": {
              }
            }
          },
          "422": {
            "description": "Unprocessable Content",
            "content": {
              "application/json": {
              }
            }
          }
        },
        "tags": [
          "role"
        ]
      }
    },
    "/api/users_role_invites": {
      "get": {
        "operationId": "users_role_invite-index",
        "parameters": [

        ],
        "responses": {
          "200": {
            "description": "OK",
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/users_role_invite"
                }
              }
            }
          },
          "400": {
            "description": "Bad Request",
            "content": {
              "application/json": {
              }
            }
          },
          "403": {
            "description": "Forbidden",
            "content": {
              "application/json": {
              }
            }
          },
          "422": {
            "description": "Unprocessable Content",
            "content": {
              "application/json": {
              }
            }
          }
        },
        "tags": [
          "users_role_invite"
        ]
      },
      "post": {
        "operationId": "users_role_invite-create",
        "parameters": [

        ],
        "responses": {
          "200": {
            "description": "OK",
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/users_role_invite"
                }
              }
            }
          },
          "400": {
            "description": "Bad Request",
            "content": {
              "application/json": {
              }
            }
          },
          "403": {
            "description": "Forbidden",
            "content": {
              "application/json": {
              }
            }
          },
          "422": {
            "description": "Unprocessable Content",
            "content": {
              "application/json": {
              }
            }
          }
        },
        "tags": [
          "users_role_invite"
        ]
      }
    },
    "/api/users_role_invites/:id": {
      "get": {
        "operationId": "users_role_invite-show",
        "parameters": [
          {
            "name": "id",
            "in": "path",
            "required": true
          }
        ],
        "responses": {
          "200": {
            "description": "OK",
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/users_role_invite"
                }
              }
            }
          },
          "400": {
            "description": "Bad Request",
            "content": {
              "application/json": {
              }
            }
          },
          "403": {
            "description": "Forbidden",
            "content": {
              "application/json": {
              }
            }
          },
          "422": {
            "description": "Unprocessable Content",
            "content": {
              "application/json": {
              }
            }
          }
        },
        "tags": [
          "users_role_invite"
        ]
      },
      "patch": {
        "operationId": "users_role_invite-update",
        "parameters": [
          {
            "name": "id",
            "in": "path",
            "required": true
          }
        ],
        "responses": {
          "200": {
            "description": "OK",
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/users_role_invite"
                }
              }
            }
          },
          "400": {
            "description": "Bad Request",
            "content": {
              "application/json": {
              }
            }
          },
          "403": {
            "description": "Forbidden",
            "content": {
              "application/json": {
              }
            }
          },
          "422": {
            "description": "Unprocessable Content",
            "content": {
              "application/json": {
              }
            }
          }
        },
        "tags": [
          "users_role_invite"
        ]
      },
      "put": {
        "operationId": "users_role_invite-update",
        "parameters": [
          {
            "name": "id",
            "in": "path",
            "required": true
          }
        ],
        "responses": {
          "200": {
            "description": "OK",
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/users_role_invite"
                }
              }
            }
          },
          "400": {
            "description": "Bad Request",
            "content": {
              "application/json": {
              }
            }
          },
          "403": {
            "description": "Forbidden",
            "content": {
              "application/json": {
              }
            }
          },
          "422": {
            "description": "Unprocessable Content",
            "content": {
              "application/json": {
              }
            }
          }
        },
        "tags": [
          "users_role_invite"
        ]
      },
      "delete": {
        "operationId": "users_role_invite-destroy",
        "parameters": [
          {
            "name": "id",
            "in": "path",
            "required": true
          }
        ],
        "responses": {
          "200": {
            "description": "OK",
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/users_role_invite"
                }
              }
            }
          },
          "400": {
            "description": "Bad Request",
            "content": {
              "application/json": {
              }
            }
          },
          "403": {
            "description": "Forbidden",
            "content": {
              "application/json": {
              }
            }
          },
          "422": {
            "description": "Unprocessable Content",
            "content": {
              "application/json": {
              }
            }
          }
        },
        "tags": [
          "users_role_invite"
        ]
      }
    },
    "/api/habits": {
      "get": {
        "operationId": "habit-index",
        "parameters": [

        ],
        "responses": {
          "200": {
            "description": "OK",
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/habit"
                }
              }
            }
          },
          "400": {
            "description": "Bad Request",
            "content": {
              "application/json": {
              }
            }
          },
          "403": {
            "description": "Forbidden",
            "content": {
              "application/json": {
              }
            }
          },
          "422": {
            "description": "Unprocessable Content",
            "content": {
              "application/json": {
              }
            }
          }
        },
        "tags": [
          "habit"
        ]
      },
      "post": {
        "operationId": "habit-create",
        "parameters": [

        ],
        "responses": {
          "200": {
            "description": "OK",
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/habit"
                }
              }
            }
          },
          "400": {
            "description": "Bad Request",
            "content": {
              "application/json": {
              }
            }
          },
          "403": {
            "description": "Forbidden",
            "content": {
              "application/json": {
              }
            }
          },
          "422": {
            "description": "Unprocessable Content",
            "content": {
              "application/json": {
              }
            }
          }
        },
        "tags": [
          "habit"
        ]
      }
    },
    "/api/habits/:id": {
      "get": {
        "operationId": "habit-show",
        "parameters": [
          {
            "name": "id",
            "in": "path",
            "required": true
          }
        ],
        "responses": {
          "200": {
            "description": "OK",
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/habit"
                }
              }
            }
          },
          "400": {
            "description": "Bad Request",
            "content": {
              "application/json": {
              }
            }
          },
          "403": {
            "description": "Forbidden",
            "content": {
              "application/json": {
              }
            }
          },
          "422": {
            "description": "Unprocessable Content",
            "content": {
              "application/json": {
              }
            }
          }
        },
        "tags": [
          "habit"
        ]
      },
      "patch": {
        "operationId": "habit-update",
        "parameters": [
          {
            "name": "id",
            "in": "path",
            "required": true
          }
        ],
        "responses": {
          "200": {
            "description": "OK",
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/habit"
                }
              }
            }
          },
          "400": {
            "description": "Bad Request",
            "content": {
              "application/json": {
              }
            }
          },
          "403": {
            "description": "Forbidden",
            "content": {
              "application/json": {
              }
            }
          },
          "422": {
            "description": "Unprocessable Content",
            "content": {
              "application/json": {
              }
            }
          }
        },
        "tags": [
          "habit"
        ]
      },
      "put": {
        "operationId": "habit-update",
        "parameters": [
          {
            "name": "id",
            "in": "path",
            "required": true
          }
        ],
        "responses": {
          "200": {
            "description": "OK",
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/habit"
                }
              }
            }
          },
          "400": {
            "description": "Bad Request",
            "content": {
              "application/json": {
              }
            }
          },
          "403": {
            "description": "Forbidden",
            "content": {
              "application/json": {
              }
            }
          },
          "422": {
            "description": "Unprocessable Content",
            "content": {
              "application/json": {
              }
            }
          }
        },
        "tags": [
          "habit"
        ]
      },
      "delete": {
        "operationId": "habit-destroy",
        "parameters": [
          {
            "name": "id",
            "in": "path",
            "required": true
          }
        ],
        "responses": {
          "200": {
            "description": "OK",
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/habit"
                }
              }
            }
          },
          "400": {
            "description": "Bad Request",
            "content": {
              "application/json": {
              }
            }
          },
          "403": {
            "description": "Forbidden",
            "content": {
              "application/json": {
              }
            }
          },
          "422": {
            "description": "Unprocessable Content",
            "content": {
              "application/json": {
              }
            }
          }
        },
        "tags": [
          "habit"
        ]
      }
    },
    "/api/habit_completions": {
      "get": {
        "operationId": "habit_completion-index",
        "parameters": [

        ],
        "responses": {
          "200": {
            "description": "OK",
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/habit_completion"
                }
              }
            }
          },
          "400": {
            "description": "Bad Request",
            "content": {
              "application/json": {
              }
            }
          },
          "403": {
            "description": "Forbidden",
            "content": {
              "application/json": {
              }
            }
          },
          "422": {
            "description": "Unprocessable Content",
            "content": {
              "application/json": {
              }
            }
          }
        },
        "tags": [
          "habit_completion"
        ]
      },
      "post": {
        "operationId": "habit_completion-create",
        "parameters": [

        ],
        "responses": {
          "200": {
            "description": "OK",
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/habit_completion"
                }
              }
            }
          },
          "400": {
            "description": "Bad Request",
            "content": {
              "application/json": {
              }
            }
          },
          "403": {
            "description": "Forbidden",
            "content": {
              "application/json": {
              }
            }
          },
          "422": {
            "description": "Unprocessable Content",
            "content": {
              "application/json": {
              }
            }
          }
        },
        "tags": [
          "habit_completion"
        ]
      }
    },
    "/api/habit_completions/:id": {
      "get": {
        "operationId": "habit_completion-show",
        "parameters": [
          {
            "name": "id",
            "in": "path",
            "required": true
          }
        ],
        "responses": {
          "200": {
            "description": "OK",
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/habit_completion"
                }
              }
            }
          },
          "400": {
            "description": "Bad Request",
            "content": {
              "application/json": {
              }
            }
          },
          "403": {
            "description": "Forbidden",
            "content": {
              "application/json": {
              }
            }
          },
          "422": {
            "description": "Unprocessable Content",
            "content": {
              "application/json": {
              }
            }
          }
        },
        "tags": [
          "habit_completion"
        ]
      },
      "patch": {
        "operationId": "habit_completion-update",
        "parameters": [
          {
            "name": "id",
            "in": "path",
            "required": true
          }
        ],
        "responses": {
          "200": {
            "description": "OK",
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/habit_completion"
                }
              }
            }
          },
          "400": {
            "description": "Bad Request",
            "content": {
              "application/json": {
              }
            }
          },
          "403": {
            "description": "Forbidden",
            "content": {
              "application/json": {
              }
            }
          },
          "422": {
            "description": "Unprocessable Content",
            "content": {
              "application/json": {
              }
            }
          }
        },
        "tags": [
          "habit_completion"
        ]
      },
      "put": {
        "operationId": "habit_completion-update",
        "parameters": [
          {
            "name": "id",
            "in": "path",
            "required": true
          }
        ],
        "responses": {
          "200": {
            "description": "OK",
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/habit_completion"
                }
              }
            }
          },
          "400": {
            "description": "Bad Request",
            "content": {
              "application/json": {
              }
            }
          },
          "403": {
            "description": "Forbidden",
            "content": {
              "application/json": {
              }
            }
          },
          "422": {
            "description": "Unprocessable Content",
            "content": {
              "application/json": {
              }
            }
          }
        },
        "tags": [
          "habit_completion"
        ]
      },
      "delete": {
        "operationId": "habit_completion-destroy",
        "parameters": [
          {
            "name": "id",
            "in": "path",
            "required": true
          }
        ],
        "responses": {
          "200": {
            "description": "OK",
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/habit_completion"
                }
              }
            }
          },
          "400": {
            "description": "Bad Request",
            "content": {
              "application/json": {
              }
            }
          },
          "403": {
            "description": "Forbidden",
            "content": {
              "application/json": {
              }
            }
          },
          "422": {
            "description": "Unprocessable Content",
            "content": {
              "application/json": {
              }
            }
          }
        },
        "tags": [
          "habit_completion"
        ]
      }
    },
    "/api/icons": {
      "get": {
        "operationId": "icon-index",
        "parameters": [

        ],
        "responses": {
          "200": {
            "description": "OK",
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/icon"
                }
              }
            }
          },
          "400": {
            "description": "Bad Request",
            "content": {
              "application/json": {
              }
            }
          },
          "403": {
            "description": "Forbidden",
            "content": {
              "application/json": {
              }
            }
          },
          "422": {
            "description": "Unprocessable Content",
            "content": {
              "application/json": {
              }
            }
          }
        },
        "tags": [
          "icon"
        ]
      }
    },
    "/api/icons/:id": {
      "get": {
        "operationId": "icon-show",
        "parameters": [
          {
            "name": "id",
            "in": "path",
            "required": true
          }
        ],
        "responses": {
          "200": {
            "description": "OK",
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/icon"
                }
              }
            }
          },
          "400": {
            "description": "Bad Request",
            "content": {
              "application/json": {
              }
            }
          },
          "403": {
            "description": "Forbidden",
            "content": {
              "application/json": {
              }
            }
          },
          "422": {
            "description": "Unprocessable Content",
            "content": {
              "application/json": {
              }
            }
          }
        },
        "tags": [
          "icon"
        ]
      }
    },
    "/api/motivational_messages": {
      "get": {
        "operationId": "motivational_message-index",
        "parameters": [

        ],
        "responses": {
          "200": {
            "description": "OK",
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/motivational_message"
                }
              }
            }
          },
          "400": {
            "description": "Bad Request",
            "content": {
              "application/json": {
              }
            }
          },
          "403": {
            "description": "Forbidden",
            "content": {
              "application/json": {
              }
            }
          },
          "422": {
            "description": "Unprocessable Content",
            "content": {
              "application/json": {
              }
            }
          }
        },
        "tags": [
          "motivational_message"
        ]
      }
    },
    "/api/motivational_messages/:id": {
      "get": {
        "operationId": "motivational_message-show",
        "parameters": [
          {
            "name": "id",
            "in": "path",
            "required": true
          }
        ],
        "responses": {
          "200": {
            "description": "OK",
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/motivational_message"
                }
              }
            }
          },
          "400": {
            "description": "Bad Request",
            "content": {
              "application/json": {
              }
            }
          },
          "403": {
            "description": "Forbidden",
            "content": {
              "application/json": {
              }
            }
          },
          "422": {
            "description": "Unprocessable Content",
            "content": {
              "application/json": {
              }
            }
          }
        },
        "tags": [
          "motivational_message"
        ]
      }
    }
  },
  "info": {
    "title": "RhinoTemplate API",
    "version": "0.0.0",
    "x-rhino": {
      "modules": {
        "rhino": {
          "version": "0.25.0.beta.17",
          "authOwner": "user",
          "baseOwner": "organization",
          "oauth": [

          ],
          "allow_signup": true
        },
        "rhino_organizations": {
          "version": "0.25.0.beta.17"
        }
      }
    }
  }
};

export default api;
