// src/components/common/LocationSearchInput.jsx
import PlacesAutocomplete from 'react-places-autocomplete';

const LocationSearchInput = ({ location, setLocation }) => {
  return (
    <PlacesAutocomplete
      value={location}
      onChange={setLocation}
      onSelect={setLocation}
    >
      {({ getInputProps, suggestions, getSuggestionItemProps, loading }) => (
        <div className="relative">
          <input
            {...getInputProps({
              placeholder: 'City, state, zip code, or "remote"',
              className:
                'w-full p-2 border border-gray-300 rounded-md focus:outline-none',
            })}
          />
          {suggestions.length > 0 && (
            <div className="absolute z-10 w-full bg-white border border-gray-200 rounded-md shadow mt-1">
              {loading && (
                <div className="p-2 text-gray-500 text-sm">Loading...</div>
              )}
              {suggestions.map((suggestion) => {
                const className = suggestion.active
                  ? 'bg-blue-100 cursor-pointer p-2'
                  : 'cursor-pointer p-2';
                return (
                  <div
                    {...getSuggestionItemProps(suggestion, { className })}
                    key={suggestion.placeId}
                  >
                    {suggestion.description}
                  </div>
                );
              })}
            </div>
          )}
        </div>
      )}
    </PlacesAutocomplete>
  );
};

export default LocationSearchInput;
