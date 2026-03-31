import { useMemo, useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import {
  ScrollView,
  View,
  Text,
  StyleSheet,
  Pressable,
  Image,
  FlatList,
  Alert,
} from 'react-native';
import * as Linking from 'expo-linking';
import Ionicons from '@expo/vector-icons/Ionicons';

import { projects } from '@/utils/portfolio';

const filters = ['All', ...new Set(projects.flatMap((project) => project.tech))];

export default function ProjectsScreen() {
  const [selectedFilter, setSelectedFilter] = useState('All');

  const filteredProjects = useMemo(() => {
    if (selectedFilter === 'All') {
      return projects;
    }
    return projects.filter((project) => project.tech.includes(selectedFilter));
  }, [selectedFilter]);

  const openExternal = (url) => {
    Linking.openURL(url).catch(() => {
      Alert.alert('Unable to open link', 'Please try again later or copy the URL manually.');
    });
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView contentContainerStyle={styles.scrollContent}>
        <View style={styles.heroSection}>
          <Text style={styles.heroBadge}>Portfolio Showcase</Text>
          <Text style={styles.heroTitle}>A blend of product thinking and engineering craft</Text>
          <Text style={styles.heroSubtitle}>
            Explore shipped projects spanning health-tech, mobility, and finance. Each solution covers the full stack: UX, APIs, and delivery.
          </Text>
        </View>

        <View style={styles.filterRow}>
          <FlatList
            data={filters}
            keyExtractor={(item) => item}
            horizontal
            showsHorizontalScrollIndicator={false}
            ItemSeparatorComponent={() => <View style={{ width: 12 }} />}
            renderItem={({ item }) => (
              <Pressable
                onPress={() => setSelectedFilter(item)}
                style={[styles.filterChip, selectedFilter === item && styles.filterChipActive]}
              >
                <Text style={[styles.filterText, selectedFilter === item && styles.filterTextActive]}>
                  {item}
                </Text>
              </Pressable>
            )}
          />
        </View>

        <View style={styles.metaRow}>
          <View style={styles.metaCard}>
            <Text style={styles.metaValue}>{projects.length}</Text>
            <Text style={styles.metaLabel}>Projects</Text>
          </View>
          <View style={styles.metaCard}>
            <Text style={styles.metaValue}>{projects.filter((p) => p.status === 'Live').length}</Text>
            <Text style={styles.metaLabel}>Live</Text>
          </View>
          <View style={styles.metaCard}>
            <Text style={styles.metaValue}>{projects.filter((p) => p.featured).length}</Text>
            <Text style={styles.metaLabel}>Featured</Text>
          </View>
        </View>

        <View style={styles.projectList}>
          {filteredProjects.map((project) => (
            <View key={project.id} style={styles.projectCard}>
              <Image source={{ uri: project.coverImage }} style={styles.projectImage} resizeMode="cover" />
              <View style={styles.projectContent}>
                <View style={styles.projectHeader}>
                  <View>
                    <Text style={styles.projectTitle}>{project.title}</Text>
                    <Text style={styles.projectMeta}>
                      {project.year} • {project.status}
                    </Text>
                  </View>
                  {project.featured && (
                    <View style={styles.projectBadge}>
                      <Ionicons name="star" size={14} color="#facc15" />
                      <Text style={styles.projectBadgeText}>Featured</Text>
                    </View>
                  )}
                </View>

                <Text style={styles.projectDescription}>{project.description}</Text>

                <View style={styles.techList}>
                  {project.tech.map((tech) => (
                    <View key={`${project.id}-${tech}`} style={styles.techTag}>
                      <Text style={styles.techTagText}>{tech}</Text>
                    </View>
                  ))}
                </View>

                <View style={styles.actionRow}>
                  {project.liveUrl && (
                    <Pressable
                      style={styles.actionButton}
                      onPress={() => openExternal(project.liveUrl!)}
                    >
                      <Ionicons name="open" size={16} color="#0ea5e9" />
                      <Text style={styles.actionText}>Live demo</Text>
                    </Pressable>
                  )}
                  {project.repoUrl && (
                    <Pressable
                      style={styles.actionButton}
                      onPress={() => openExternal(project.repoUrl!)}
                    >
                      <Ionicons name="logo-github" size={16} color="#0ea5e9" />
                      <Text style={styles.actionText}>Repository</Text>
                    </Pressable>
                  )}
                </View>
              </View>
            </View>
          ))}
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
    paddingHorizontal: 20,
    paddingBottom: 32,
    gap: 24,
  },
  heroSection: {
    marginTop: 16,
    borderRadius: 24,
    backgroundColor: '#0f172a',
    padding: 24,
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
    lineHeight: 22,
    color: '#cbd5f5',
  },
  filterRow: {
    marginTop: 4,
  },
  filterChip: {
    paddingHorizontal: 16,
    paddingVertical: 10,
    borderRadius: 999,
    borderWidth: 1,
    borderColor: '#cbd5f5',
    backgroundColor: '#ffffff',
  },
  filterChipActive: {
    backgroundColor: '#0ea5e9',
    borderColor: '#0ea5e9',
  },
  filterText: {
    fontSize: 14,
    fontWeight: '600',
    color: '#0f172a',
  },
  filterTextActive: {
    color: '#ffffff',
  },
  metaRow: {
    flexDirection: 'row',
    gap: 12,
  },
  metaCard: {
    flex: 1,
    backgroundColor: '#ffffff',
    paddingVertical: 16,
    borderRadius: 20,
    alignItems: 'center',
    shadowColor: '#0f172a',
    shadowOpacity: 0.06,
    shadowRadius: 10,
    shadowOffset: { width: 0, height: 6 },
    elevation: 1,
  },
  metaValue: {
    fontSize: 20,
    fontWeight: '700',
    color: '#0f172a',
  },
  metaLabel: {
    fontSize: 12,
    color: '#475569',
    marginTop: 4,
  },
  projectList: {
    gap: 20,
  },
  projectCard: {
    borderRadius: 28,
    backgroundColor: '#ffffff',
    overflow: 'hidden',
    shadowColor: '#0f172a',
    shadowOpacity: 0.08,
    shadowRadius: 12,
    shadowOffset: { width: 0, height: 8 },
    elevation: 2,
  },
  projectImage: {
    width: '100%',
    height: 200,
  },
  projectContent: {
    padding: 20,
    gap: 14,
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
  projectMeta: {
    marginTop: 4,
    fontSize: 13,
    color: '#475569',
  },
  projectBadge: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
    paddingHorizontal: 10,
    paddingVertical: 6,
    borderRadius: 999,
    backgroundColor: '#fef3c7',
  },
  projectBadgeText: {
    fontSize: 12,
    fontWeight: '600',
    color: '#b45309',
  },
  projectDescription: {
    fontSize: 14,
    color: '#475569',
    lineHeight: 21,
  },
  techList: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 8,
  },
  techTag: {
    borderRadius: 999,
    backgroundColor: '#e0f2fe',
    paddingHorizontal: 12,
    paddingVertical: 6,
  },
  techTagText: {
    fontSize: 12,
    fontWeight: '600',
    color: '#0369a1',
  },
  actionRow: {
    flexDirection: 'row',
    gap: 12,
    flexWrap: 'wrap',
  },
  actionButton: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
    paddingHorizontal: 14,
    paddingVertical: 10,
    backgroundColor: '#f0f9ff',
    borderRadius: 999,
  },
  actionText: {
    fontSize: 13,
    fontWeight: '600',
    color: '#0ea5e9',
  },
});

