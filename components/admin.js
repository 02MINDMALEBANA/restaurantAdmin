import { addDoc, collection, deleteDoc, doc, getDocs } from 'firebase/firestore';
import {db} from '../components/firebase'
import { StyleSheet, Text, View, TextInput, Image,Alert, Pressable,TouchableOpacity,useState,useEffect} from 'react-native';

export default function Admin(){


    const [menus, setMenus] = useState([])
    

    const menuRef = collection(db, 'menus')
    const getMenus = async () =>{
          const data =  await getDocs(menuRef)
         
          console.log( data.docs.map((results)=>(results.data())))
        //   setMenus( data.docs.map((results)=>({...results.data(), id:results.id})))
    }

    useEffect(()=>{
      

      getMenus()
           
    },[])

    return(
        <View>
            <Text>tttt</Text>
        </View>
    )
}