# frozen_string_literal: true

class Icon < ApplicationRecord
  has_one_attached :image

  validates :name, presence: true, uniqueness: true
  validates :image, presence: true

  rhino_owner_global
end
