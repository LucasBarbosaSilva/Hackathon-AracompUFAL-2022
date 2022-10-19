import * as React from 'react'
import { createContext, useContext, useState, useEffect, useCallback } from 'react'
import {locations_default} from '../constants/locations'

interface LocationProp {
    title: string;
    description: string;
    address: string;
    coordinates: {
        latitude: number;
        longitude: number;
    };
    userDistance: number;
}

interface LocationsProps {
  locations: LocationProp[]
  setLocations(value: any): void
  functionSetLocations(value: any):void
}

interface LocationsProviderProps {
  children: any
}

export const LocationsContext = createContext<LocationsProps>({} as LocationsProps)

export const LocationsProvider: React.FC<LocationsProviderProps> = ({ children }) => {
  const [locations,setLocations] = useState(locations_default)

  const functionSetLocations = useCallback(
    (locationsObj: LocationProp[]) => {
        setLocations(locationsObj)
    },
    [setLocations],
  )


  return (
    <LocationsContext.Provider
      value={{
        locations,
        setLocations,
        functionSetLocations
      }}
    >
      {children}
    </LocationsContext.Provider>
  )
}

export function useLocations(): LocationsProps {
  return useContext(LocationsContext)
}
