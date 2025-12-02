class CreateHabitCompletions < ActiveRecord::Migration[7.2]
  def change
    create_table :habit_completions do |t|
      t.date :completion_date, null: false
      t.string :status, null: false, default: "completed"

      t.references :habit, null: false, foreign_key: true

      t.timestamps
    end
    add_index :habit_completions, [ :habit_id, :completion_date ], unique: true
  end
end
