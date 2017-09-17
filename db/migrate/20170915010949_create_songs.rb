class CreateSongs < ActiveRecord::Migration[5.1]
  def change
    create_table :songs do |t|
      t.string :artist
      t.string :rank

      t.timestamps
    end
  end
end
