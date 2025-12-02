class CreateHabits < ActiveRecord::Migration[7.2]
  def change
    create_table :habits do |t|
      t.string :name, null: false
      t.text :description
      t.string :frequency_type, null: false
      t.jsonb :frequency_value, default: {}
      t.string :icon_name
      t.string :color_scheme
      t.date :start_date, null: false
      t.boolean :active, default: true

      t.references :user, null: false, foreign_key: true
      t.references :organization, null: false, foreign_key: true

      t.timestamps
    end
  end
end
