import {Image, ImageBackground, StyleSheet, Text, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import {SafeAreaProvider, SafeAreaView} from 'react-native-safe-area-context';
import style from './style';
import images from '../../assets/images';

const index = () => {
  const [prayerTimes, setPrayerTimes] = useState(null);
  const [loading, setLoading] = useState(true); // Yükleme durumunu kontrol et

  useEffect(() => {
    fetch(
      'https://api.aladhan.com/v1/timingsByCity?city=Istanbul&country=Turkey&method=2',
    )
      .then(response => response.json())
      .then(data => {
        setPrayerTimes(data.data.timings);
        setLoading(false); // Veri geldi, yükleme bitti
      })
      .catch(error => {
        console.log('API Hatası:', error);
        setLoading(false); // Hata olursa da yüklemeyi bitir
      });
  }, []);

  return (
    <SafeAreaView>
      <View style={style.container}>
        <Image style={style.background} source={images.istanbul}></Image>
      </View>
      <View style={style.alan1}>
        <Text style={style.alan1Text}> Vakit Bul</Text>
      </View>
      <View style={style.alan2}>
        <Text style={style.bar}> İstanbul Namaz vakitleri</Text>
        <Text style={style.alan1Text}>Yükleniyor...</Text>
        {prayerTimes && prayerTimes.Fajr ? (
          <>
            <Text style={style.bar1}>Sabah: {prayerTimes.Fajr}</Text>
            <Text style={style.bar1}>Öğle: {prayerTimes.Dhuhr}</Text>
            <Text style={style.bar1}>İkindi: {prayerTimes.Asr}</Text>
            <Text style={style.bar1}>Akşam: {prayerTimes.Maghrib}</Text>
            <Text style={style.bar1}>Yatsı: {prayerTimes.Isha}</Text>
          </>
        ) : (
          <Text style={style.alan1Text}>Veri Yüklenemedi</Text>
        )}
      </View>
    </SafeAreaView>
  );
};

export default index;

const styles = StyleSheet.create({});
