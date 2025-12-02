class CreateMotivationalMessages < ActiveRecord::Migration[7.2]
  def change
    create_table :motivational_messages do |t|
      t.text :content, null: false, index: { unique: true }

      t.timestamps
    end
  end
end
