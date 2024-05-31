import React, { useState, useEffect } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import MaterialIcons from '@expo/vector-icons/MaterialIcons'
import CreditCard from 'react-native-credit-card';
import { visa } from 'react-native-credit-card/card-images';


export default function App() {
  const [currentPage, setCurrentPage] = useState(1);


  return (
    <View style={styles.container}>
      <View style={styles.topBar}>
        <TouchableOpacity
          style={[
            styles.topBarButton,
            {
              backgroundColor:
                currentPage == 1 ? 'lightblue' : "white"
            }
          ]}
          onPress={() => setCurrentPage(1)}>
          <MaterialIcons name="credit-card" color={currentPage == 1 ? "white" : "darkgray"} size={20} />
          <Text style={[styles.buttonText, { color: currentPage == 1 ? "white" : "darkgray" }]}>Kredi Kartı</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[
            styles.topBarButton,
            {
              backgroundColor:
                currentPage == 2 ? 'lightblue' : "white"
            }
          ]}
          onPress={() => setCurrentPage(2)}>
          <MaterialIcons name="payments" color={currentPage == 2 ? "white" : "darkgray"} size={20} />
          <Text style={[styles.buttonText, { color: currentPage == 2 ? "white" : "darkgray" }]}>Havale</Text>
        </TouchableOpacity>
      </View>
      {
        currentPage == 1 ?
          <View style={{ flex: 6, backgroundColor: 'blue' }}>
            <CreditCard
              type={visa}
              shiny={false}
              bar={false}
              focused={null}
              number={"1223"}
              name={"Name"}
              expiry={"1232"}
              cvc={321} />
          </View>
          :
          <View style={styles.bankPage}>
            <View style={{ flex: 1, paddingHorizontal: 8 }}>
              <Text style={{ fontSize: 20, color: 'blue', fontWeight: '600', marginVertical: 4 }}>Havale İşlemi:</Text>
              <Text style={{ marginVertical: 4 }}>
                Lütfen yan tarafta bulunan banka bilgilerini kullanarak havale veya EFT işlemi gerçekleştiriniz. İşleminizi tamamladıktan sonra, dekontu veya ödeme bilgilerini
                <Text style={{ color: "blue" }}>
                  satis@isbul.net
                </Text>
                adresine göndermeyi unutmayınız. <Text style={{ color: 'red', textDecorationLine: 'underline' }}>Açıklama kısmına mutlaka firma adınızı yazınız.</Text>
              </Text>
              <Text style={{ fontSize: 20, fontWeight: 'bold' }}>Detaylı bilgi için: </Text>
              <View style={{ flexDirection: 'row' }}>
                <MaterialIcons name='phone-in-talk' color='lightblue' size={30} />
                <Text style={{ fontSize: 20, marginLeft: 4 }}>(0212) 452 16 04</Text>
              </View>
            </View>
            <View style={{ flex: 1 }}>
              <Text style={{fontWeight: '600', color: 'blue',fontSize: 20, marginVertical: 4}}>Havale Bilgileri</Text>
              <Text style={{color: 'orange', textDecorationLine: 'underline',  marginVertical: 4}}>Akbank Şirinevler Şubesi</Text>
              <Text style={{ marginVertical: 4}}><Text style={{fontWeight: 'bold'}}>Şube Kodu:</Text> 0188</Text>
              <Text style={{ marginVertical: 4}}><Text style={{fontWeight: 'bold'}}>Hesap No:</Text> 0197523</Text>
              <Text style={{ marginVertical: 4}}><Text style={{fontWeight: 'bold'}}>Hesap Adı:</Text> Gezer Grup İnsan Kaynakları Eğit.ve Danışmanlık Tic. Anonim Şti.</Text>
              <Text><Text style={{fontWeight: 'bold'}}>IBAN No:</Text> TR82 0004 6001 8888 8000 1975 23</Text>
            </View>
          </View>
      }
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  topBar: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  topBarButton: {
    flexDirection: 'row',
    marginHorizontal: 4,
    padding: 8,
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
    borderWidth: 1,
    borderColor: 'darkgray',
    borderRadius: 30
  },
  buttonText: {
    marginLeft: 8,
    fontSize: 16,
    color: 'darkgray'
  },
  bankPage: {
    flex: 6,
    flexDirection: 'row'
  }
});
