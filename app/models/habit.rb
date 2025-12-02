# frozen_string_literal: true

class Habit < ApplicationRecord
  belongs_to :user
  belongs_to :organization
  has_many :habit_completions, dependent: :destroy

  validates :name, presence: true
  validates :frequency_type, presence: true, inclusion: { in: %w[daily weekly custom] }
  validates :start_date, presence: true

  rhino_owner :organization
  rhino_references [ :organization, :user ]
end
