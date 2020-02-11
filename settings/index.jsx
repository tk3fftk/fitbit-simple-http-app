function settingsComponent(props) {
  return (
    <Page>
      <Section
        title={
          <Text bold align="center">
            App Settings
          </Text>
        }
      />
      <Section>
        <TextInput
          title="Add List Item"
          label="Item Name"
          placeholder="Type something"
          action="Add Item"
          settingKeys="input01"
          onAutocomplete={value => {
            const autoValues = [
              { name: "red", value: "1" },
              { name: "orange", value: "2" },
              { name: "yellow", value: "3" },
              { name: "green", value: "4" },
              { name: "blue", value: "5" },
              { name: "purple", value: "6" }
            ];
            return autoValues.filter(option => option.name.startsWith(value));
          }}
        />
      </Section>
    </Page>
  );
}

registerSettingsPage(settingsComponent);
