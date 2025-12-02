# frozen_string_literal: true

FactoryBot.define do
  factory :habit do
    name { "MyString" }
    description { "MyText" }
    frequency_type { "MyString" }
    frequency_value { "" }
    icon_name { "MyString" }
    color_scheme { "MyString" }
    start_date { "2025-12-02" }
    active { false }
    user { nil }
    organization { nil }
  end
end
