import React, { useState, useEffect, useCallback } from 'react';
import {
  Animated,
  View,
  TextInput,
  Text,
  TouchableOpacity,
  FlatList,
  ActivityIndicator,
} from 'react-native';
import { FontAwesome } from '@expo/vector-icons'; // for arrow down/up icons

type AutocompleteDropdownProps = {
  data: string[]; // Data for plain select
  fetchData?: (query: string) => Promise<string[]>; // Function for async data fetching
  placeholder?: string; // Placeholder for the input
  onSelect: (selectedItem: string) => void; // Callback when an item is selected
  defaultItems?: string[]; // Default items to show when caret is clicked
  error?: string; // For error handling with react-hook-form
  onChange?: (query: string) => void; // To trigger external form events
};

const AutocompleteDropdown = React.forwardRef<TextInput, AutocompleteDropdownProps>(
  (
    {
      data = [],
      fetchData,
      placeholder = 'Search...',
      onSelect,
      defaultItems = ['Item 1', 'Item 2', 'Item 3'], // Default items
      error,
      onChange = () => {},
      ...props
    },
    ref,
  ) => {
    const [query, setQuery] = useState('');
    const [filteredData, setFilteredData] = useState<string[]>(data);
    const [dropdownVisible, setDropdownVisible] = useState(false); // Toggle dropdown visibility
    const [loading, setLoading] = useState(false);
    const [selectedItem, setSelectedItem] = useState<string | null>(null); // Store selected item
    const floatingLabelAnimation = React.useRef(new Animated.Value(0)).current;

    // Show all items in the dropdown regardless of selection
    const handleFetchData = useCallback(async () => {
      if (fetchData) {
        setLoading(true);
        const results = await fetchData(query);
        setFilteredData(results);
        setLoading(false);
      } else {
        // Filter based on the query or show all data if no query
        const filtered = data.filter((item) => item.toLowerCase().includes(query.toLowerCase()));
        setFilteredData(filtered);
      }
    }, [fetchData, query, data]);

    useEffect(() => {
      if (query.length === 0) {
        setFilteredData(data); // Show all items if no query
      } else {
        handleFetchData();
      }
    }, [query, handleFetchData, data]);

    const handleSelect = (item: string) => {
      setQuery(item); // Set the query to the selected item (to display it in the input)
      setSelectedItem(item); // Highlight the selected item
      setDropdownVisible(false); // Close the dropdown
      onSelect(item); // Trigger the callback for the selected item
      Animated.timing(floatingLabelAnimation, {
        toValue: 1,
        duration: 150,
        useNativeDriver: false,
      }).start();
    };

    const toggleDropdown = () => {
      setDropdownVisible(!dropdownVisible); // Toggle dropdown visibility
    };

    const handleFocus = (): void => {
      setDropdownVisible(true);
      Animated.timing(floatingLabelAnimation, {
        toValue: 1,
        duration: 150,
        useNativeDriver: false,
      }).start();
    };

    const handleBlur = (): void => {
      setDropdownVisible(!dropdownVisible);
      if (!selectedItem || !query) {
        Animated.timing(floatingLabelAnimation, {
          toValue: 0,
          duration: 150,
          useNativeDriver: false,
        }).start();
      }
    };

    const floatingLabelStyle = {
      top: floatingLabelAnimation.interpolate({
        inputRange: [0, 1],
        outputRange: [22, 12],
      }),
      fontSize: floatingLabelAnimation.interpolate({
        inputRange: [0, 1],
        outputRange: [14, 10],
      }),
      color:
        placeholder === 'Email'
          ? floatingLabelAnimation.interpolate({
              inputRange: [0, 1],
              outputRange: [error ? '#ef4444' : '#94A3B8', error ? '#ef4444' : '#64748B'],
            })
          : '#94A3B8',
    };

    return (
      <View className="w-full">
        {/* TouchableOpacity as a wrapper with arrow toggle */}
        <TouchableOpacity
          className={`z-10 h-[60px]a bg-slate-100 rounded-xl px-5 flex-row justify-between items-center ${
            error ? 'border-red-500' : 'border-gray-300'
          }`}
          onPress={toggleDropdown}
          activeOpacity={0.8} // Provides feedback on press
        >
          <Animated.Text
            className="absolute left-5 z-20 text-white font-normal"
            style={floatingLabelStyle}>
            {placeholder}
          </Animated.Text>
          <TextInput
            ref={ref} // Forward the ref to the input
            className="z-0 flex-1 pt-4 h-full text-black" // Makes the input expand to full width
            placeholder=""
            value={query}
            onFocus={handleFocus}
            onBlur={handleBlur}
            onChangeText={(text) => {
              setQuery(text);
              onChange(text); // Trigger the external onChange (e.g., react-hook-form)
            }}
            editable // Input is always editable to allow filtering
          />
          <FontAwesome name={dropdownVisible ? 'angle-up' : 'angle-down'} size={24} color="gray" />
        </TouchableOpacity>

        {/* Dropdown with input search */}
        {dropdownVisible && (
          <View className="border border-gray-300 rounded-lg bg-white mt-1 max-h-50">
            {/* Loading indicator */}
            {loading ? (
              <View className="p-4 flex justify-center items-center">
                <ActivityIndicator size="small" />
              </View>
            ) : (
              <FlatList
                scrollEnabled={false}
                data={filteredData} // Show all items in the dropdown
                keyExtractor={(item) => item}
                renderItem={({ item }) => (
                  <TouchableOpacity
                    className={`px-2 py-4 border-b border-gray-200 ${
                      selectedItem === item ? 'bg-blue-500' : ''
                    }`} // Highlight selected item with blue background
                    onPress={() => handleSelect(item)}>
                    <Text
                      className={`${
                        selectedItem === item ? 'text-white font-bold' : 'text-gray-800'
                      }`} // White text and bold for selected item
                    >
                      {item}
                    </Text>
                  </TouchableOpacity>
                )}
              />
            )}
          </View>
        )}
        {error && <Text className="text-red-500 mt-1">{error}</Text>}
      </View>
    );
  },
);

AutocompleteDropdown.displayName = 'AutocompleteDropdown';

export default AutocompleteDropdown;
