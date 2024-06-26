import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";

export default function GooglePlacesInput() {
    return (
        <GooglePlacesAutocomplete
            placeholder="Search"
            onPress={(data, details = null) => {
                // 'details' is provided when fetchDetails = true
                console.log(data, details);
            }}
            query={{
                key: "YOUR API KEY",
                language: "en"
            }}
        />
    );
}
