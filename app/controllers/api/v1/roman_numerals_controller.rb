module Api
  module V1
    class RomanNumeralsController < ApplicationController
      before_action :roman_numerals_converter_params

      def roman_to_arabic
        convertion_parameters = roman_numerals_converter_params
        puts convertion_parameters[:roman_numeral] if convertion_parameters.present?
        if convertion_parameters.present?
          roman_numeral = convertion_parameters[:roman_numeral]
          converted_numeral = convert_roman_to_arabic(roman_numeral)
          if converted_numeral.present?
            respond_to do |format|
              format.json { render json: { status: 'success', results: converted_numeral } }
            end
          else
            respond_to do |format|
              format.json { render json: { error: 'parameter not found', status: 422 } }
            end
          end
        end
      end

      private

      def roman_numerals_converter_params
        params.permit(:roman_numeral)
      end

      def convert_roman_to_arabic(roman_numeral)
        RomanNumerals.to_decimal(roman_numeral)
      end
    end
  end
end
