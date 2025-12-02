# frozen_string_literal: true

class HabitCompletion < ApplicationRecord
  belongs_to :habit

  validates :completion_date, presence: true
  validates :status, presence: true, inclusion: { in: %w[completed skipped missed] }
  validates :completion_date, uniqueness: { scope: :habit_id, message: "has already been recorded for this habit" }

  rhino_owner :habit
  rhino_references [ :habit ]
end
