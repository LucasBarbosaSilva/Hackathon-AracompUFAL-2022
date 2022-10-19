
import React from 'react';
import {List} from '../../components/list';
import { locations_default } from "../../constants/locations";

export const NearbyPoints = () => {
    return <List data = {locations_default}/>
}