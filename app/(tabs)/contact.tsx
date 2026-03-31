import { SafeAreaView } from 'react-native-safe-area-context';
import { ScrollView, View, Text, StyleSheet, TextInput, Pressable, Alert } from 'react-native';
import * as Linking from 'expo-linking';
import Ionicons from '@expo/vector-icons/Ionicons';

import { contactChannels } from '@/utils/portfolio';

export default function ContactScreen() {
  const handleQuickAction = (href: string) => {
    Linking.openURL(href).catch(() => {
      Alert.alert('Unable to open link', 'Please try again or copy the contact detail manually.');
    });
  };

  const handleSubmit = () => {
    Alert.alert(
      'Thanks for reaching out!',
      'This demo form just shows the flow. Wire it to your backend or a service like Formspree to receive messages.',
    );
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView contentContainerStyle={styles.scrollContent}>
        <View style={styles.heroSection}>
          <Text style={styles.heroBadge}>Let&apos;s collaborate</Text>
          <Text style={styles.heroTitle}>Tell me about your next project or product idea.</Text>
          <Text style={styles.heroSubtitle}>
            Whether you need an MVP, a production-ready platform, or long-term engineering support, I&apos;m ready to help.
          </Text>
        </View>

        <View style={styles.channelsSection}>
          <Text style={styles.sectionLabel}>Contact channels</Text>
          <View style={styles.channelList}>
            {contactChannels.map((channel) => (
              <Pressable
                key={channel.id}
                style={styles.channelCard}
                onPress={() => handleQuickAction(channel.href)}
              >
                <Ionicons name={channel.icon as any} size={22} color="#0ea5e9" />
                <View style={{ flex: 1 }}>
                  <Text style={styles.channelLabel}>{channel.label}</Text>
                  <Text style={styles.channelValue}>{channel.value}</Text>
                </View>
                <Ionicons name="arrow-forward" size={18} color="#94a3b8" />
              </Pressable>
            ))}
          </View>
        </View>

        <View style={styles.formSection}>
          <Text style={styles.sectionLabel}>Send a quick message</Text>
          <View style={styles.formCard}>
            <Text style={styles.formHint}>
              This lightweight form stores values locally. Connect your backend or service when ready.
            </Text>
            <View style={styles.formField}>
              <Text style={styles.formLabel}>Name</Text>
              <TextInput placeholder="Your name" style={styles.formInput} placeholderTextColor="#94a3b8" />
            </View>
            <View style={styles.formField}>
              <Text style={styles.formLabel}>Email</Text>
              <TextInput
                placeholder="you@example.com"
                style={styles.formInput}
                keyboardType="email-address"
                placeholderTextColor="#94a3b8"
              />
            </View>
            <View style={styles.formField}>
              <Text style={styles.formLabel}>Project details</Text>
              <TextInput
                placeholder="Share a few sentences about the problem you&apos;re solving..."
                multiline
                numberOfLines={4}
                style={[styles.formInput, styles.formTextarea]}
                placeholderTextColor="#94a3b8"
              />
            </View>
            <Pressable style={styles.submitButton} onPress={handleSubmit}>
              <Text style={styles.submitButtonText}>Send Message</Text>
              <Ionicons name="send" size={18} color="#fff" />
            </Pressable>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#f8fafc',
  },
  scrollContent: {
    padding: 20,
    paddingBottom: 32,
    gap: 24,
  },
  heroSection: {
    marginTop: 16,
    padding: 24,
    borderRadius: 24,
    backgroundColor: '#0f172a',
    gap: 12,
  },
  heroBadge: {
    alignSelf: 'flex-start',
    backgroundColor: '#1d4ed8',
    color: '#f8fafc',
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 999,
    textTransform: 'uppercase',
    fontWeight: '600',
    fontSize: 12,
    letterSpacing: 0.8,
  },
  heroTitle: {
    fontSize: 26,
    fontWeight: '800',
    color: '#f8fafc',
    lineHeight: 32,
  },
  heroSubtitle: {
    fontSize: 15,
    color: '#cbd5f5',
    lineHeight: 22,
  },
  channelsSection: {
    gap: 12,
  },
  sectionLabel: {
    fontSize: 12,
    textTransform: 'uppercase',
    fontWeight: '600',
    color: '#0ea5e9',
    letterSpacing: 1,
  },
  channelList: {
    gap: 12,
  },
  channelCard: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 14,
    padding: 18,
    borderRadius: 20,
    backgroundColor: '#ffffff',
    shadowColor: '#0f172a',
    shadowOpacity: 0.06,
    shadowRadius: 10,
    shadowOffset: { width: 0, height: 6 },
    elevation: 1,
  },
  channelLabel: {
    fontSize: 13,
    color: '#475569',
    textTransform: 'uppercase',
    fontWeight: '600',
  },
  channelValue: {
    fontSize: 15,
    color: '#0f172a',
    marginTop: 2,
  },
  formSection: {
    gap: 12,
  },
  formCard: {
    backgroundColor: '#ffffff',
    borderRadius: 24,
    padding: 20,
    gap: 16,
    shadowColor: '#0f172a',
    shadowOpacity: 0.08,
    shadowRadius: 12,
    shadowOffset: { width: 0, height: 8 },
    elevation: 2,
  },
  formHint: {
    fontSize: 13,
    color: '#475569',
    lineHeight: 18,
  },
  formField: {
    gap: 6,
  },
  formLabel: {
    fontSize: 13,
    fontWeight: '600',
    color: '#0f172a',
  },
  formInput: {
    backgroundColor: '#f8fafc',
    borderRadius: 14,
    paddingHorizontal: 14,
    paddingVertical: 12,
    fontSize: 15,
    color: '#0f172a',
    borderWidth: 1,
    borderColor: '#e2e8f0',
  },
  formTextarea: {
    height: 120,
    textAlignVertical: 'top',
  },
  submitButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 8,
    backgroundColor: '#0ea5e9',
    paddingVertical: 14,
    borderRadius: 999,
  },
  submitButtonText: {
    color: '#ffffff',
    fontWeight: '700',
    fontSize: 15,
  },
});

