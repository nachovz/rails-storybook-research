class ButtonComponentStories < ViewComponent::Storybook::Stories
	def primary
		render Ui::ButtonComponent.new(variant: "primary", label: "Primary")
	end

	def secondary
		render Ui::ButtonComponent.new(variant: "secondary", label: "Secondary")
	end
end
