# frozen_string_literal: true

FactoryBot.define do
  factory :habit_completion do
    completion_date { "2025-12-02" }
    status { "MyString" }
    habit { nil }
  end
end
