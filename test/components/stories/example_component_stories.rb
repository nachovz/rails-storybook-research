class ExampleComponentStories < ViewComponent::Storybook::Stories
  def hello_world
    render ExampleComponent.new(title: "my title") do
      "Hello World!"
    end
  end

  def empty
    render ExampleComponent.new
  end
end
