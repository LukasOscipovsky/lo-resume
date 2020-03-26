import React from 'react';
import logo from './logo.svg';
import './App.css';
import GridView from 'react-native-super-grid';
import { url } from 'inspector';
import Layout from './components/Layout'

export default function App() {
  return (
    <div className="App">
      <Layout background="#01FF70" />
      <Layout background="#F012BE" />
      <Layout background="#0074D9" />
      <Layout background="#7FDBFF" />
      <Layout background="#85144b" />
      <Layout background="#01FF70" />
      <Layout background="#AAAAAA" />
      <Layout background="#FF851B" />
      <Layout background="#FF4136" />
    </div>
  );
}
