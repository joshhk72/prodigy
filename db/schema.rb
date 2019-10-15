# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 2019_10_15_153633) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "albums", force: :cascade do |t|
    t.string "title", null: false
    t.integer "artist_id", null: false
    t.date "date"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["artist_id"], name: "index_albums_on_artist_id"
  end

  create_table "annotations", force: :cascade do |t|
    t.integer "track_id", null: false
    t.integer "start_idx", null: false
    t.integer "end_idx", null: false
    t.text "body", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.integer "author_id", null: false
    t.index ["author_id"], name: "index_annotations_on_author_id"
    t.index ["track_id"], name: "index_annotations_on_track_id"
  end

  create_table "artists", force: :cascade do |t|
    t.string "name", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "track_features", force: :cascade do |t|
    t.integer "track_id", null: false
    t.integer "artist_id", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["artist_id"], name: "index_track_features_on_artist_id"
    t.index ["track_id", "artist_id"], name: "index_track_features_on_track_id_and_artist_id", unique: true
    t.index ["track_id"], name: "index_track_features_on_track_id"
  end

  create_table "track_producers", force: :cascade do |t|
    t.integer "track_id", null: false
    t.integer "artist_id", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["artist_id"], name: "index_track_producers_on_artist_id"
    t.index ["track_id", "artist_id"], name: "index_track_producers_on_track_id_and_artist_id", unique: true
    t.index ["track_id"], name: "index_track_producers_on_track_id"
  end

  create_table "track_writers", force: :cascade do |t|
    t.integer "track_id", null: false
    t.integer "artist_id", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["artist_id"], name: "index_track_writers_on_artist_id"
    t.index ["track_id", "artist_id"], name: "index_track_writers_on_track_id_and_artist_id", unique: true
    t.index ["track_id"], name: "index_track_writers_on_track_id"
  end

  create_table "tracks", force: :cascade do |t|
    t.string "name", null: false
    t.text "lyrics", null: false
    t.integer "length", null: false
    t.integer "album_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.date "date"
    t.string "image_url"
    t.string "youtube_url"
    t.integer "artist_id"
    t.index ["album_id"], name: "index_tracks_on_album_id"
    t.index ["artist_id"], name: "index_tracks_on_artist_id"
  end

  create_table "users", force: :cascade do |t|
    t.string "username"
    t.string "email"
    t.string "password_digest"
    t.string "session_token"
    t.text "description"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.string "image_url"
  end

end
