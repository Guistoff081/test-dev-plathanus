module Api
  module V1
    class PropertiesController < ApplicationController
      def index
        @properties = Property.all.with_attached_photos
        render json: @properties.map { |property|
          property.as_json.merge({ images: property.photos.map { |img| { image: url_for(img) } } })
        }
      end
    end
  end
end
