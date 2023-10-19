# frozen_string_literal: true

class Ui::ButtonComponent < ViewComponent::Base
  def initialize(label:, variant:)
    @label = label
    @variant = variant
  end

end
