function settingsComponent(props) {
  return (
    <Page>
      <Section
        title={
          <Text bold align="center">
            App Settings
          </Text>
        }>
        <TextInput
          title="Add List Item"
          label="My label"
          placeholder="Type something"
          action="Add Item"
          settingsKey="input01"
        />
      </Section>
    </Page>
  );
}

registerSettingsPage(settingsComponent);
