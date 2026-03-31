import { Link } from 'expo-router';
import { SafeAreaView } from 'react-native-safe-area-context';
import {
  ScrollView,
  View,
  Text,
  StyleSheet,
  type ViewStyle,
  Pressable,
  FlatList,
  Alert,
} from 'react-native';
import * as Linking from 'expo-linking';
import Ionicons from '@expo/vector-icons/Ionicons';

import { features, stats, projects, testimonials } from '@/utils/portfolio';

export default function HomeScreen() {
  const openExternal = (url: string) => {
    Linking.openURL(url).catch(() => {
      Alert.alert('Unable to open link', 'Please try again later or copy the URL manually.');
    });
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView contentContainerStyle={styles.scrollContent}>
        <View style={styles.heroCard}>
          <Text style={styles.badge}>Available for new projects</Text>
          <Text style={styles.heroTitle}>Hi, I&apos;m MacAnthony</Text>
          <Text style={styles.heroSubtitle}>
            Full-Stack developer creating delightful products for web, mobile, and beyond.
          </Text>
          <View style={styles.heroActions}>
            <Link href="/(tabs)/projects" asChild>
              <Pressable style={styles.buttonPrimaryCombined}>
                <Text style={styles.buttonPrimaryText}>See Projects</Text>
                <Ionicons name="arrow-forward" size={18} color="#fff" />
              </Pressable>
            </Link>
            <Link href="/(tabs)/contact" asChild>
              <Pressable style={styles.buttonGhostCombined}>
                <Text style={styles.buttonGhostText}>Let&apos;s talk</Text>
              </Pressable>
            </Link>
          </View>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionLabel}>Capabilities</Text>
          <Text style={styles.sectionTitle}>Building modern digital experiences</Text>
          <View style={styles.featureGrid}>
            {features.map((feature) => (
              <View key={feature.id} style={styles.featureCard}>
                <Ionicons name={feature.icon as any} size={28} color="#0ea5e9" />
                <Text style={styles.featureTitle}>{feature.title}</Text>
                <Text style={styles.featureTagline}>{feature.tagline}</Text>
                <Text style={styles.featureDescription}>{feature.description}</Text>
              </View>
            ))}
          </View>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionLabel}>Impact</Text>
          <FlatList
            data={stats}
            numColumns={2}
            keyExtractor={(item) => item.id}
            columnWrapperStyle={styles.statRow}
            scrollEnabled={false}
            renderItem={({ item }) => (
              <View style={styles.statCard}>
                <Text style={styles.statValue}>{item.value}</Text>
                <Text style={styles.statLabel}>{item.label}</Text>
              </View>
            )}
          />
        </View>

        <View style={styles.section}>
          <View style={styles.sectionHeader}>
            <Text style={styles.sectionLabel}>Highlights</Text>
            <Link href="/(tabs)/projects">
              <Text style={styles.sectionLink}>Browse all</Text>
            </Link>
          </View>
          <Text style={styles.sectionTitle}>Selected case studies</Text>
          <View style={styles.projectList}>
            {projects.slice(0, 2).map((project) => (
              <View key={project.id} style={styles.projectCard}>
                <View style={styles.projectHeader}>
                  <View>
                    <Text style={styles.projectTitle}>{project.title}</Text>
                    <Text style={styles.projectYear}>
                      {project.year} • {project.status}
                    </Text>
                  </View>
                  {project.featured && (
                    <View style={styles.featuredBadge}>
                      <Ionicons name="star" size={14} color="#facc15" />
                      <Text style={styles.featuredLabel}>Featured</Text>
                    </View>
                  )}
                </View>
                <Text style={styles.projectSummary}>{project.summary}</Text>
                <View style={styles.techList}>
                  {project.tech.map((tech) => (
                    <View key={`${project.id}-${tech}`} style={styles.techBadge}>
                      <Text style={styles.techText}>{tech}</Text>
                    </View>
                  ))}
                </View>
                <View style={styles.projectActions}>
                  {project.liveUrl && (
                    <Pressable
                      style={styles.linkButton}
                      onPress={() => openExternal(project.liveUrl!)}
                    >
                      <Ionicons name="open" size={16} color="#0ea5e9" />
                      <Text style={styles.linkButtonText}>Live demo</Text>
                    </Pressable>
                  )}
                  {project.repoUrl && (
                    <Pressable
                      style={styles.linkButton}
                      onPress={() => openExternal(project.repoUrl!)}
                    >
                      <Ionicons name="logo-github" size={16} color="#0ea5e9" />
                      <Text style={styles.linkButtonText}>Source</Text>
                    </Pressable>
                  )}
                </View>
              </View>
            ))}
          </View>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionLabel}>Testimonials</Text>
          <Text style={styles.sectionTitle}>Trusted by product leaders</Text>
          <View style={styles.testimonialList}>
            {testimonials.map((testimonial) => (
              <View key={testimonial.id} style={styles.testimonialCard}>
                <Ionicons
                  name="chatbubble-ellipses"
                  size={20}
                  color="#0ea5e9"
                  style={styles.testimonialIcon}
                />
                <Text style={styles.testimonialQuote}>
                  &ldquo;{testimonial.quote}&rdquo;
                </Text>
                <Text style={styles.testimonialAuthor}>{testimonial.author}</Text>
                <Text style={styles.testimonialRole}>{testimonial.role}</Text>
              </View>
            ))}
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const baseButton: ViewStyle = {
  flexDirection: 'row',
  alignItems: 'center',
  paddingHorizontal: 18,
  paddingVertical: 12,
  borderRadius: 999,
  gap: 6,
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#f8fafc',
  },
  scrollContent: {
    paddingBottom: 32,
    paddingHorizontal: 20,
    gap: 32,
  },
  heroCard: {
    backgroundColor: '#0f172a',
    borderRadius: 24,
    padding: 24,
    paddingBottom: 28,
    marginTop: 16,
    gap: 16,
  },
  badge: {
    alignSelf: 'flex-start',
    backgroundColor: '#1d4ed8',
    color: '#e0f2fe',
    fontSize: 12,
    fontWeight: '600',
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 999,
    textTransform: 'uppercase',
    letterSpacing: 0.5,
  },
  heroTitle: {
    fontSize: 32,
    fontWeight: '800',
    color: '#f8fafc',
  },
  heroSubtitle: {
    fontSize: 16,
    lineHeight: 24,
    color: '#cbd5f5',
  },
  heroActions: {
    flexDirection: 'row',
    gap: 12,
  },
  buttonPrimaryCombined: {
    ...baseButton,
    backgroundColor: '#0ea5e9',
  },
  buttonPrimaryText: {
    color: '#fff',
    fontWeight: '600',
    fontSize: 15,
  },
  buttonGhostCombined: {
    ...baseButton,
    backgroundColor: 'rgba(148, 163, 184, 0.16)',
    borderWidth: 1,
    borderColor: 'rgba(148, 163, 184, 0.4)',
  },
  buttonGhostText: {
    color: '#e2e8f0',
    fontWeight: '600',
    fontSize: 15,
  },
  section: {
    gap: 16,
  },
  sectionLabel: {
    color: '#0ea5e9',
    fontWeight: '600',
    textTransform: 'uppercase',
    letterSpacing: 1,
    fontSize: 12,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '700',
    color: '#0f172a',
  },
  sectionHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  sectionLink: {
    color: '#0ea5e9',
    fontWeight: '600',
  },
  featureGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 16,
  },
  featureCard: {
    flexBasis: '100%',
    backgroundColor: '#ffffff',
    borderRadius: 20,
    padding: 18,
    gap: 8,
    shadowColor: '#0f172a',
    shadowOpacity: 0.08,
    shadowRadius: 12,
    shadowOffset: { width: 0, height: 8 },
    elevation: 2,
  },
  featureTitle: {
    fontSize: 16,
    fontWeight: '700',
    color: '#0f172a',
  },
  featureTagline: {
    fontSize: 13,
    fontWeight: '600',
    color: '#475569',
  },
  featureDescription: {
    fontSize: 13,
    color: '#475569',
    lineHeight: 18,
  },
  statRow: {
    justifyContent: 'space-between',
  },
  statCard: {
    flex: 1,
    marginBottom: 16,
    marginRight: 12,
    padding: 16,
    borderRadius: 20,
    backgroundColor: '#ffffff',
    shadowColor: '#0f172a',
    shadowOpacity: 0.06,
    shadowRadius: 10,
    shadowOffset: { width: 0, height: 6 },
    elevation: 1,
  },
  statValue: {
    fontSize: 22,
    fontWeight: '700',
    color: '#0f172a',
  },
  statLabel: {
    fontSize: 13,
    color: '#475569',
    marginTop: 4,
  },
  projectList: {
    gap: 16,
  },
  projectCard: {
    backgroundColor: '#ffffff',
    borderRadius: 24,
    padding: 20,
    gap: 14,
    shadowColor: '#0f172a',
    shadowOpacity: 0.08,
    shadowRadius: 12,
    shadowOffset: { width: 0, height: 8 },
    elevation: 2,
  },
  projectHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  projectTitle: {
    fontSize: 18,
    fontWeight: '700',
    color: '#0f172a',
  },
  projectYear: {
    fontSize: 13,
    color: '#475569',
    marginTop: 4,
  },
  featuredBadge: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
    paddingHorizontal: 10,
    paddingVertical: 6,
    borderRadius: 999,
    backgroundColor: '#fef3c7',
  },
  featuredLabel: {
    fontSize: 12,
    fontWeight: '600',
    color: '#b45309',
  },
  projectSummary: {
    fontSize: 14,
    color: '#475569',
    lineHeight: 21,
  },
  techList: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 8,
  },
  techBadge: {
    borderRadius: 999,
    paddingHorizontal: 12,
    paddingVertical: 6,
    backgroundColor: '#e0f2fe',
  },
  techText: {
    fontSize: 12,
    color: '#0369a1',
    fontWeight: '600',
  },
  projectActions: {
    flexDirection: 'row',
    gap: 12,
  },
  linkButton: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
    paddingVertical: 10,
    paddingHorizontal: 14,
    borderRadius: 999,
    backgroundColor: '#f0f9ff',
  },
  linkButtonText: {
    fontSize: 13,
    fontWeight: '600',
    color: '#0ea5e9',
  },
  testimonialList: {
    gap: 16,
  },
  testimonialCard: {
    backgroundColor: '#ffffff',
    borderRadius: 20,
    padding: 20,
    gap: 8,
    shadowColor: '#0f172a',
    shadowOpacity: 0.06,
    shadowRadius: 10,
    shadowOffset: { width: 0, height: 6 },
    elevation: 1,
  },
  testimonialIcon: {
    marginBottom: 8,
  },
  testimonialQuote: {
    fontSize: 15,
    lineHeight: 22,
    color: '#0f172a',
    fontStyle: 'italic',
  },
  testimonialAuthor: {
    fontSize: 14,
    fontWeight: '700',
    color: '#0f172a',
    marginTop: 6,
  },
  testimonialRole: {
    fontSize: 12,
    color: '#475569',
  },
});
