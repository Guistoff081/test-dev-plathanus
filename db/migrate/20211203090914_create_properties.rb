class CreateProperties < ActiveRecord::Migration[6.1]
  def change
    create_table :properties do |t|
      t.string :name, null: false

      t.timestamps
    end
  end
end
