import * as React from 'react';
import Autocomplete from '@mui/joy/Autocomplete';
import AutocompleteOption from '@mui/joy/AutocompleteOption';
import ListItemDecorator from '@mui/joy/ListItemDecorator';
import ListItemContent from '@mui/joy/ListItemContent';
import Typography from '@mui/joy/Typography';
import { countries } from '@/data/country';

type CountrySelectType = {
  setSearch: React.Dispatch<React.SetStateAction<string | undefined>>
}

export default function CountrySelect({setSearch}:CountrySelectType) {
  return (
    <Autocomplete
      id="country-select-demo"
      placeholder="Choose a country"
      slotProps={{
        input: {
          autoComplete: 'new-password', // disable autocomplete and autofill
        },
      }}
      sx={{ width: 300, mb: 2 }}
      options={countries}
      onChange={(event, value) => setSearch(value?.label)}
      autoHighlight
      getOptionLabel={(option) => option.label}
      renderOption={(props, option) => (
        <AutocompleteOption {...props}>
          <ListItemDecorator>
            <img
              loading="lazy"
              width="20"
              srcSet={`https://flagcdn.com/w40/${option.code.toLowerCase()}.png 2x`}
              src={`https://flagcdn.com/w20/${option.code.toLowerCase()}.png`}
              alt=""
            />
          </ListItemDecorator>
          <ListItemContent sx={{ fontSize: 'sm' }}>
            {option.label}
            <Typography level="body-xs">
              ({option.code}) +{option.phone}
            </Typography>
          </ListItemContent>
        </AutocompleteOption>
      )}
    />
  );
}

// From https://bitbucket.org/atlassian/atlaskit-mk-2/raw/4ad0e56649c3e6c973e226b7efaeb28cb240ccb0/packages/core/select/src/data/countries.js
