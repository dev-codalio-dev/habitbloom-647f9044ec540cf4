# frozen_string_literal: true

class MotivationalMessage < ApplicationRecord
  validates :content, presence: true, uniqueness: true

  rhino_owner_global
end
