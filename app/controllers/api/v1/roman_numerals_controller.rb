module Api
  module V1
    class RomanNumeralsController < ApplicationController
      before_action :roman_numerals_converter_params, only: :roman_to_arabic
      before_action :arabic_numerals_converter_params, only: :arabic_to_roman

      def roman_to_arabic
        convertion_parameters = roman_numerals_converter_params
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

      def arabic_to_roman
        convertion_parameters = arabic_numerals_converter_params
        if convertion_parameters.present?
          arabic_numeral = convertion_parameters[:arabic_numeral].to_d
          converted_numeral = convert_arabic_to_roman(arabic_numeral)
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

      def arabic_numerals_converter_params
        params.permit(:arabic_numeral)
      end

      def convert_roman_to_arabic(roman_numeral)
        RomanNumerals.to_decimal(roman_numeral)
      end

      def convert_arabic_to_roman(arabic_numeral)
        RomanNumerals.to_roman(arabic_numeral)
      end
    end
  end
end
