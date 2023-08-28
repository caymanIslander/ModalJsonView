import React, { useState } from 'react';
import { Alert, Modal, StyleSheet, Text, Pressable, View,ScrollView } from 'react-native';

const App = () => {
  const [modalVisible, setModalVisible] = useState(false);

  const longText = {
  "identity": "KİŞİSEL VERİLERİN İŞLENMESİ AYDINLATMA METNİ",
  "dataController": "Veri Sorumlusunun Kimliği",
  "dataControllerDetails": "6698 sayılı Kişisel Verilerin Korunması Kanununun (KVK Kanunu)...",
  "processingPurposes": "Kişisel Verilerinizin İşlenme Amaçları",
  "processingPurposesDetails": "İçişleri Bakanlığı Nüfus ve Vatandaşlık İşleri Genel Müdürlüğü (NVİGM)...",
  "sharingWithThirdParties": "Kişisel Verilerinizin Üçüncü Kişilerle Paylaşılması ve Hangi Amaçla Aktarıldığı",
  "sharingWithThirdPartiesDetails": "Kişisel verileriniz 5490 sayılı Nüfus Hizmetleri Kanunun 45 inci maddesinin 1 inci fıkrası kapsamında belirtilen kamu kurum...",
  "collectionMethodAndLegalBasis": "Kişisel Verilerinizin Toplanma Yöntemi ve Hukuki Sebebi",
  "collectionMethodAndLegalBasisDetails": "NVİGM 5490 sayılı Nüfus Hizmetleri Kanunun Aile kütüklerinde bulunması gereken kişisel bilgiler başlıklı 7. Maddesinde belirtilen...",
  "rightsOfDataSubjects": "Kişisel Veri Sahibinin 6698 sayılı Kanunun 11 inci Maddesinde Sayılan Hakları",
  "rightsOfDataSubjectsDetails": "6698 sayılı Kanunu’nun 11 inci maddesinde düzenlenen haklarını, bu Kanunu’nun 13 üncü maddesi ve Veri Sorumlusuna Başvuru...",
  "conclusion": "İşbu Aydınlatma Metni KVKK ve ilgili mevzuat uyarınca veri sahiplerini bilgilendirmek ve aydınlatmak amacı ile hazırlanmıştır."
  }


  return (
    <View style={styles.centeredView}>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert('Modal has been closed.');
          setModalVisible(!modalVisible);
        }}>
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <ScrollView contentContainerStyle={styles.scrollViewContent}>
              <Text style={[styles.modalText, styles.header] }>{longText.identity}</Text>
              <Text style={[styles.modalText, styles.header2] }>{longText.dataController}</Text>
              <Text style={styles.modalText }>{longText.dataControllerDetails}</Text>
              <Text style={[styles.modalText, styles.header2] }>{longText.processingPurposes}</Text>
              <Text style={styles.modalText }>{longText.processingPurposesDetails}</Text>
              <Text style={[styles.modalText, styles.header2] }>{longText.sharingWithThirdParties}</Text>
              <Text style={styles.modalText }>{longText.sharingWithThirdPartiesDetails}</Text>
              <Text style={[styles.modalText, styles.header2] }>{longText.collectionMethodAndLegalBasis}</Text>
              <Text style={styles.modalText }>{longText.collectionMethodAndLegalBasisDetails}</Text>
              <Text style={[styles.modalText, styles.header2] }>{longText.rightsOfDataSubjects}</Text>
              <Text style={styles.modalText }>{longText.rightsOfDataSubjectsDetails}</Text>
              <Text style={styles.modalText }>{longText.conclusion}</Text>
            </ScrollView>
            <Pressable
              style={[styles.button, styles.buttonClose]}
              onPress={() => setModalVisible(!modalVisible)}>
              <Text style={styles.textStyle}>Tamam</Text>
            </Pressable>
          </View>
        </View>
      </Modal>
      <Pressable
        style={[styles.button, styles.buttonOpen]}
        onPress={() => setModalVisible(true)}>
        <Text style={styles.textStyle}>KVKK Aydınlatma Metni</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  header2: {
    fontSize: 13,
    textDecorationLine: "underline",
  },
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
  },
  modalView: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
    marginTop: 20,
  },
  buttonOpen: {
    backgroundColor: '#F194FF',
  },
  buttonClose: {
    backgroundColor: '#2196F3',
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
  },
});

export default App;
