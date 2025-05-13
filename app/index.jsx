import { Image, Pressable, StyleSheet, Text, View } from "react-native";

export default function Index() {
    return (
        <View style={s.container}>
            <Image source={require('./pomodoro.png')} style={s.image} />

            <View style={s.actions}>
                {/* Menu com os três botões lado a lado */}
                <View style={s.menu}>
                    <Pressable style={s.button}>
                        <Text style={s.buttonText} numberOfLines={1}>
                            Foco
                        </Text>
                    </Pressable>
                    <Pressable style={s.button}>
                        <Text style={s.buttonText} numberOfLines={1}>
                            Pausa Curta
                        </Text>
                    </Pressable>
                    <Pressable style={s.button}>
                        <Text style={s.buttonText} numberOfLines={1}>
                            Pausa Longa
                        </Text>
                    </Pressable>
                </View>

                {/* Timer */}
                <Text style={s.timer}>25:00</Text>

                {/* Botão começar */}
                <Pressable style={s.startButton}>
                    <Text style={s.buttonText}>Começar</Text>
                </Pressable>
            </View>

            {/* Rodapé */}
            <View style={s.footer}>
                <Text style={s.footerText}>
                    Projeto de Estudo sem fins comerciais.
                </Text>
                <Text style={s.footerText}>
                    Desenvolvido por João Lucas.
                </Text>
            </View>
        </View>
    );
}

const s = StyleSheet.create({
    image: {
        flex: 1,
        width: 350,
        height: 200,
        resizeMode: 'contain',
    },
    container: {
        flex: 1,
        gap: 40,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: '#021123',
    },
    actions: {
        width: '80%',
        borderWidth: 2,
        borderRadius: 32,
        paddingVertical: 10,
        paddingHorizontal: 10,
        borderColor: '#144480',
        backgroundColor: '#14448080',
    },
    menu: {
        marginBottom: 5,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    button: {
        borderRadius: 20,
        paddingVertical: 15,
        paddingHorizontal: 11,
        backgroundColor: '#14448080',
    },
    buttonText: {
        fontSize: 16,
        color: '#ffffff',
        fontWeight: 'bold',
        textAlign: 'center',
    },
    timer: {
        padding: 20,
        fontSize: 54,
        color: '#fff',
        fontWeight: 'bold',
        textAlign: 'center',
    },
    startButton: {
        padding: 20,
        marginTop: 20,
        borderRadius: 32,
        alignSelf: 'center',
        backgroundColor: '#B872FF',
    },
    footer: {
        width: '80%',
        marginTop: 20,
    },
    footerText: {
        fontSize: 12.5,
        color: '#98A0a8',
        textAlign: 'center',
    },
});
