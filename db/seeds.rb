# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
#

photos = [Rails.root.join('public', 'images', 'Fotos-24.jpg'),
          Rails.root.join('public', 'images', 'I131_sala_de_tv_-15.jpg'),
          Rails.root.join('public', 'images', 'J098_sala_de_estar_-8.jpg'),
          Rails.root.join('public', 'images', 'Joaquim Floriano, 855 - AP 134-19.jpg'),
          Rails.root.join('public', 'images', 'N012_sala_de_tv_.jpg'),
          Rails.root.join('public', 'images', 'Sala (4).jpg'),
          Rails.root.join('public', 'images', 'versaoweb014.jpg')]


50.times do
  properties = Property.create(name: Faker::Address.full_address)
  photos.each do |photo|
    filename  = File.basename(photo)
    properties.photos.attach(io: File.open(photo), filename: filename)
  end
end
