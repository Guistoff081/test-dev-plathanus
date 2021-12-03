class Property < ApplicationRecord
  has_many_attached :photos
  validates :name, presence: true

  def get_cover_photo
    photos.third if photos.attached?
  end
end
