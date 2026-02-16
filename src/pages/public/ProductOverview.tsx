import { useState } from 'react';
import {
  Truck, Wrench, Calendar, MapPin, Users, BarChart3,
  Shield, CheckCircle, Clock, Zap, ChevronDown, ChevronUp,
  Package, Activity, AlertTriangle, Smartphone, Target,
  ArrowRight, Layers
} from 'lucide-react';
import { cn } from '@/lib/utils';

// ─── Types ──────────────────────────────────────────────────────────────────

type FeatureStatus = 'built' | 'in-design' | 'planned';

interface SubFeature {
  name: string;
  description: string;
  status?: FeatureStatus;
}

interface FeatureModule {
  id: string;
  title: string;
  tagline: string;
  description: string;
  icon: React.ElementType;
  status: FeatureStatus;
  gradient: string;
  borderColor: string;
  features: string[];
  subFeatures: SubFeature[];
  valueProps: string[];
}

// ─── Feature Data ───────────────────────────────────────────────────────────

const FEATURES: FeatureModule[] = [
  {
    id: 'fleet',
    title: 'Fleet Management',
    tagline: 'Complete visibility over your entire fleet',
    description: 'Real-time vehicle inventory, status tracking, and lifecycle management for every vehicle in your operation. Track EDVs, CDVs, Step Vans, Sprinters, and more across multiple providers.',
    icon: Truck,
    status: 'built',
    gradient: 'from-blue-500 to-cyan-500',
    borderColor: 'border-blue-200',
    features: [
      'Real-time vehicle status dashboard',
      'Fleet analytics with KPI cards',
      'Route availability checker',
      'Bulk vehicle CSV import',
      'Fleet provider management',
    ],
    subFeatures: [
      { name: 'Vehicle Inventory', description: 'Track 12+ vehicle types (EDV, CDV, Prime Van, Sprinter, Step Van, Box Truck, Rivian, etc.) with full configuration and metadata.', status: 'built' },
      { name: 'Status Tracking', description: 'Real-time status management: in-service, in-maintenance, archived, and grounded states with instant transitions.', status: 'built' },
      { name: 'Odometer History', description: 'Complete mileage audit trail with timestamps, validation rules, and historical tracking for compliance.', status: 'built' },
      { name: 'Fleet Analytics', description: 'Dashboard with fleet health KPIs, utilization metrics, and performance tracking across your operation.', status: 'built' },
      { name: 'Route Availability', description: 'Check available vehicles by service type and date. Plan route coverage before dispatch.', status: 'built' },
      { name: 'Bulk Import', description: 'CSV import tool for migrating existing fleet data. Preview, validate, and import hundreds of vehicles at once.', status: 'built' },
      { name: 'Fleet Provider Integration', description: 'Manage vehicles across multiple fleet providers with granular access controls and service provider relationships.', status: 'built' },
      { name: 'Vehicle Archiving', description: 'Lifecycle management with full archiving and deactivation workflows. Maintain records while keeping active fleet clean.', status: 'built' },
    ],
    valueProps: [
      'Complete visibility across your entire fleet from a single dashboard',
      'Eliminate spreadsheet-based tracking and manual status updates',
      'Make data-driven decisions about fleet composition and utilization',
    ],
  },
  {
    id: 'maintenance',
    title: 'Maintenance & Work Orders',
    tagline: 'Proactive maintenance that prevents costly breakdowns',
    description: 'Full work order lifecycle management from creation through resolution. Track assignments, parts, costs, and technician productivity with real-time status updates.',
    icon: Wrench,
    status: 'built',
    gradient: 'from-orange-500 to-red-500',
    borderColor: 'border-orange-200',
    features: [
      'Complete work order lifecycle',
      'Technician assignment & tracking',
      'Parts needed & replaced tracking',
      'Maintenance analytics & cost analysis',
      'Document management',
    ],
    subFeatures: [
      { name: 'Work Order Management', description: 'Full lifecycle: open, assigned, in-progress, awaiting-parts, completed, cancelled. Priority levels and quick-assignment flags.', status: 'built' },
      { name: 'Technician Assignment', description: 'Assign technicians with validation, track assignments across organizations, monitor technician productivity and workload.', status: 'built' },
      { name: 'Parts Tracking', description: 'Track parts needed during maintenance and parts replaced during resolution. Visual badges with status-based UI (amber warnings, gray read-only).', status: 'built' },
      { name: 'Maintenance Analytics', description: 'Performance metrics, technician productivity charts, cost analysis breakdowns, and vehicle health scoring.', status: 'built' },
      { name: 'Document Management', description: 'Attach photos, invoices, and documents to maintenance records. Full file upload with organization-scoped access.', status: 'built' },
      { name: 'Maintenance Timeline', description: 'Historical view of all maintenance activity across your fleet. Filter by vehicle, technician, status, date range, and priority.', status: 'built' },
      { name: 'Vehicle Health Analytics', description: 'Vehicle condition scoring and PM compliance metrics. Identify vehicles that need attention before they break down.', status: 'built' },
    ],
    valueProps: [
      'Reduce vehicle downtime with proactive maintenance management',
      'Track every dollar spent on maintenance for better budgeting',
      'Give technicians clear assignments with all the context they need',
    ],
  },
  {
    id: 'pm',
    title: 'Preventive Maintenance',
    tagline: 'Never miss a scheduled service again',
    description: 'Industry-leading 4-tier PM scheduling system with template management, mileage and time-based intervals, overdue tracking, and automatic grounding for non-compliant vehicles.',
    icon: Calendar,
    status: 'built',
    gradient: 'from-green-500 to-emerald-500',
    borderColor: 'border-green-200',
    features: [
      'PM-A/B/C/D tier scheduling',
      'Template management with inheritance',
      'Overdue tracking with auto-grounding',
      'PM compliance dashboard',
      'DVIC & Amazon QC integration',
    ],
    subFeatures: [
      { name: 'PM Tier System', description: 'Four PM levels: PM-A (light/oil change), PM-B (standard), PM-C (major service), PM-D (extended). Each with configurable services.', status: 'built' },
      { name: 'Template Engine', description: 'Hierarchical service inheritance across PM levels. Templates per vehicle ownership type. Services cascade from PM-A through PM-D.', status: 'built' },
      { name: 'Smart Scheduling', description: 'Dual-trigger scheduling by mileage OR time interval, whichever comes first. Buffer windows (grace periods) for operational flexibility.', status: 'built' },
      { name: 'Auto-Grounding', description: 'Automatically ground vehicles when PM schedules become critically overdue. Enforces compliance without manual intervention.', status: 'built' },
      { name: 'Compliance Dashboard', description: 'Color-coded PM status across your fleet: green (current), yellow (upcoming), orange (due soon), red (overdue), gray (no schedule).', status: 'built' },
      { name: 'DVIC Tracking', description: 'Daily Vehicle Inspection Certificate records with pre/post-trip inspections, defect tracking, inspector signatures, and photo documentation.', status: 'built' },
      { name: 'Amazon QC Integration', description: 'Amazon and DSP quality control inspection records, corrective action tracking, and next QC due date calculations.', status: 'built' },
      { name: 'Cost Tracking', description: 'Track labor and parts costs per PM completion. Historical cost analysis for budgeting and vendor negotiation.', status: 'built' },
    ],
    valueProps: [
      'Ensure 100% PM compliance across your fleet with zero manual tracking',
      'Reduce unexpected breakdowns through systematic preventive care',
      'Meet Amazon QC requirements consistently with automated scheduling',
    ],
  },
  {
    id: 'afs',
    title: 'Amazon Fleet Services (AFS)',
    tagline: 'Maximize your AFS recovery and compliance',
    description: 'Purpose-built Amazon Fleet Services integration for tracking recovery charges, managing vehicle groundings, and maintaining compliance with Amazon quality standards.',
    icon: Shield,
    status: 'built',
    gradient: 'from-amber-500 to-yellow-500',
    borderColor: 'border-amber-200',
    features: [
      'AFS recovery charge tracking',
      'Vehicle grounding management',
      'Amazon QC inspection records',
      'Revenue recovery workflows',
    ],
    subFeatures: [
      { name: 'Recovery Tracking', description: 'Track and manage AFS recovery charges across your fleet. Categorize, dispute, and reconcile charges systematically.', status: 'built' },
      { name: 'Grounding Management', description: 'Manage Amazon-mandated vehicle groundings with clear status tracking, resolution workflows, and fleet impact visibility.', status: 'built' },
      { name: 'QC Inspections', description: 'Record and track Amazon quality control inspections, corrective actions, and compliance timelines.', status: 'built' },
      { name: 'Revenue Recovery', description: 'Systematic approach to identifying, tracking, and recovering charges that can be disputed or reduced.', status: 'built' },
    ],
    valueProps: [
      'Stop leaving money on the table with untracked AFS charges',
      'Maintain compliance to avoid costly groundings and penalties',
      'Data-driven approach to charge disputes and recovery',
    ],
  },
  {
    id: 'wave-planning',
    title: 'Wave Planning',
    tagline: 'Intelligent dispatch that optimizes every route',
    description: 'Two-phase dispatch optimization system. Phase 1 handles smart pool planning with driver allocation. Phase 2 introduces DEP (Driver Experience Preference) scoring for route-driver matching.',
    icon: MapPin,
    status: 'in-design',
    gradient: 'from-purple-500 to-pink-500',
    borderColor: 'border-purple-200',
    features: [
      'Smart pool planning & allocation',
      'DEP scoring system (R-W-P-V-T)',
      'Automated wave generation',
      'Fair standby rotation',
      'Load balancing',
    ],
    subFeatures: [
      { name: 'Pool Planning (Phase 1)', description: 'Smart driver allocation to vehicle pools. SQE/PACE rankings for top performers, qualification tracking (EDV, PRIME, STANDARD, XL).', status: 'in-design' },
      { name: 'Fair Standby Rotation', description: 'No driver sits standby twice before everyone has had their turn. Automated fairness with "Days Since Standby" tracking.', status: 'in-design' },
      { name: 'Drag & Drop Interface', description: 'Visual drag-and-drop for manual overrides with real-time pool metrics and one-click auto-assign functionality.', status: 'in-design' },
      { name: 'DEP Scoring (Phase 2)', description: 'Route assignment using 5-factor R-W-P-V-T scoring: Route Familiarity, Wave Preference, Pad Knowledge, Vehicle Preference, Type Experience.', status: 'in-design' },
      { name: 'Automated Wave Generation', description: 'System generates optimal wave assignments based on driver scores, vehicle availability, and route requirements.', status: 'in-design' },
      { name: 'Load Balancing', description: 'Distribute workload evenly across drivers. Balance package counts, stop counts, and estimated delivery times.', status: 'in-design' },
      { name: 'Route Swap Detection', description: 'Detect and prevent unauthorized route swaps. Maintain assignment integrity with manager override controls.', status: 'planned' },
    ],
    valueProps: [
      'Reduce route planning time from hours to minutes',
      'Match the right driver to the right route with DEP scoring',
      'Ensure fair treatment of all drivers with automated rotation',
    ],
  },
  {
    id: 'driver-center',
    title: 'Driver Center',
    tagline: 'Mobile-first tools drivers actually want to use',
    description: 'A mobile-optimized portal giving drivers everything they need before, during, and after their routes. Personalized via DEP preferences with vehicle inspections, performance tracking, and issue reporting.',
    icon: Smartphone,
    status: 'in-design',
    gradient: 'from-teal-500 to-green-500',
    borderColor: 'border-teal-200',
    features: [
      'Pre-route planning & check-in',
      'Vehicle inspection with photos',
      'Performance dashboard (Netradyne)',
      'Issue reporting from mobile',
      'Schedule management',
    ],
    subFeatures: [
      { name: 'Pre-Route Interface', description: 'Route information card (ID, date, wave, pad, timing), vehicle assignment, package count, and expectations (stops/hour, first/last stop times).', status: 'in-design' },
      { name: 'Vehicle Inspections', description: 'Pre-trip and post-trip vehicle inspections with photo capture, defect reporting, and digital signatures.', status: 'in-design' },
      { name: 'DEP Preferences', description: 'Drivers set route familiarity, wave preferences, pad knowledge, vehicle preferences, and delivery type experience for personalized assignments.', status: 'in-design' },
      { name: 'Performance Dashboard', description: 'Netradyne safety metrics integration, delivery performance scores, and personal scorecards with improvement tracking.', status: 'in-design' },
      { name: 'Maintenance Reporting', description: 'Report vehicle issues directly from mobile with photo attachments. Issues flow into the maintenance work order system automatically.', status: 'in-design' },
      { name: 'Route History', description: 'View historical routes, delivery metrics, and performance trends over time.', status: 'in-design' },
      { name: 'Schedule Management', description: 'View current and upcoming shifts, request changes, and manage availability.', status: 'planned' },
    ],
    valueProps: [
      'Give drivers modern tools that reduce friction and improve satisfaction',
      'Capture vehicle issues in real-time before they become breakdowns',
      'Improve driver retention with personalized route assignments',
    ],
  },
  {
    id: 'ops-intelligence',
    title: 'Operations Intelligence',
    tagline: 'Data-driven decisions at every level',
    description: 'Comprehensive analytics and command center giving owners and managers real-time operational insights, trend analysis, and automated reporting for smarter business decisions.',
    icon: BarChart3,
    status: 'planned',
    gradient: 'from-indigo-500 to-purple-500',
    borderColor: 'border-indigo-200',
    features: [
      'Owner command center',
      'Real-time KPI dashboards',
      'Trend analysis & forecasting',
      'Automated reporting',
      'Fleet expansion planning',
    ],
    subFeatures: [
      { name: 'Command Center', description: 'Single-screen view of routes dispatched, packages assigned, driver check-in status, active vehicles, and operational health.', status: 'planned' },
      { name: 'KPI Dashboards', description: 'Real-time metrics: route readiness, driver confirmation rates, vehicle utilization by type, and maintenance alerts.', status: 'planned' },
      { name: 'Trend Analysis', description: 'Spot patterns across operations. Track week-over-week and month-over-month performance trends.', status: 'planned' },
      { name: 'Automated Reports', description: 'Schedule daily, weekly, and monthly reports. Auto-delivered to stakeholders with the metrics that matter.', status: 'planned' },
      { name: 'Fleet Expansion Planning', description: 'Utilization data and projections to make informed decisions about when and how to grow your fleet.', status: 'planned' },
      { name: 'Driver Performance Scorecards', description: 'Comprehensive driver scorecards combining delivery performance, safety scores, and reliability metrics.', status: 'planned' },
      { name: 'Cost Intelligence', description: 'Operational cost analysis, maintenance spend trends, and ROI tracking across fleet investments.', status: 'planned' },
    ],
    valueProps: [
      'Move from reactive to proactive operations management',
      'Identify cost savings opportunities with real data',
      'Plan fleet growth with confidence using utilization analytics',
    ],
  },
  {
    id: 'pace',
    title: 'PACE System',
    tagline: 'Fair, transparent driver accountability',
    description: 'Progressive Automated Corrective Engagement system for consistent, documented driver performance management. Ensures fair treatment while maintaining operational standards.',
    icon: Target,
    status: 'planned',
    gradient: 'from-rose-500 to-red-500',
    borderColor: 'border-rose-200',
    features: [
      'Progressive corrective engagement',
      'Automated documentation',
      'Safety scoring integration',
      'Performance trend tracking',
    ],
    subFeatures: [
      { name: 'Progressive Engagement', description: 'Structured escalation path: coaching, verbal, written, final, separation. Each step documented and tracked.', status: 'planned' },
      { name: 'Automated Documentation', description: 'System generates corrective action documents with relevant data. Managers approve and deliver with full audit trail.', status: 'planned' },
      { name: 'Safety Integration', description: 'Netradyne safety events feed into PACE scoring. Combine safety, delivery, and attendance metrics.', status: 'planned' },
      { name: 'Performance Trending', description: 'Track driver improvement or decline over time. Celebrate improvements, intervene early on negative trends.', status: 'planned' },
    ],
    valueProps: [
      'Ensure consistent, fair treatment across all drivers',
      'Reduce management time with automated documentation',
      'Protect the business with proper corrective action records',
    ],
  },
];

// ─── Status Badge Component ─────────────────────────────────────────────────

function StatusBadge({ status, size = 'default' }: { status: FeatureStatus; size?: 'default' | 'sm' }) {
  const config = {
    'built': { label: 'Live', bg: 'bg-emerald-100', text: 'text-emerald-800', dot: 'bg-emerald-500' },
    'in-design': { label: 'In Design', bg: 'bg-blue-100', text: 'text-blue-800', dot: 'bg-blue-500' },
    'planned': { label: 'Planned', bg: 'bg-gray-100', text: 'text-gray-700', dot: 'bg-gray-400' },
  };
  const c = config[status];
  const padding = size === 'sm' ? 'px-2 py-0.5 text-xs' : 'px-2.5 py-1 text-xs';

  return (
    <span className={cn('inline-flex items-center gap-1.5 rounded-full font-medium', c.bg, c.text, padding)}>
      <span className={cn('w-1.5 h-1.5 rounded-full', c.dot)} />
      {c.label}
    </span>
  );
}

// ─── Executive Overview Tab ─────────────────────────────────────────────────

function ExecutiveOverview() {
  const builtCount = FEATURES.filter(f => f.status === 'built').length;
  const designCount = FEATURES.filter(f => f.status === 'in-design').length;
  const plannedCount = FEATURES.filter(f => f.status === 'planned').length;

  return (
    <div className="space-y-8">
      {/* Summary Stats */}
      <div className="grid grid-cols-3 gap-4">
        <div className="bg-emerald-50 border border-emerald-200 rounded-xl p-5 text-center">
          <div className="text-3xl font-bold text-emerald-700">{builtCount}</div>
          <div className="text-sm text-emerald-600 font-medium mt-1">Modules Live</div>
        </div>
        <div className="bg-blue-50 border border-blue-200 rounded-xl p-5 text-center">
          <div className="text-3xl font-bold text-blue-700">{designCount}</div>
          <div className="text-sm text-blue-600 font-medium mt-1">In Design</div>
        </div>
        <div className="bg-gray-50 border border-gray-200 rounded-xl p-5 text-center">
          <div className="text-3xl font-bold text-gray-700">{plannedCount}</div>
          <div className="text-sm text-gray-600 font-medium mt-1">Planned</div>
        </div>
      </div>

      {/* Feature Cards */}
      <div className="grid md:grid-cols-2 gap-5">
        {FEATURES.map((feature) => {
          const Icon = feature.icon;
          return (
            <div
              key={feature.id}
              className={cn(
                'bg-white border-2 rounded-xl p-6 transition-all hover:shadow-lg',
                feature.borderColor
              )}
            >
              <div className="flex items-start justify-between mb-3">
                <div className="flex items-center gap-3">
                  <div className={cn('p-2.5 rounded-lg bg-gradient-to-br text-white', feature.gradient)}>
                    <Icon className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 text-lg">{feature.title}</h3>
                    <p className="text-sm text-gray-500">{feature.tagline}</p>
                  </div>
                </div>
                <StatusBadge status={feature.status} />
              </div>

              <p className="text-gray-600 text-sm leading-relaxed mb-4">
                {feature.description}
              </p>

              <div className="space-y-1.5">
                {feature.features.map((f) => (
                  <div key={f} className="flex items-center gap-2 text-sm text-gray-700">
                    <CheckCircle className="w-3.5 h-3.5 text-gray-400 shrink-0" />
                    <span>{f}</span>
                  </div>
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

// ─── Detailed Breakdown Tab ─────────────────────────────────────────────────

function FeatureDetail({ feature }: { feature: FeatureModule }) {
  const [expanded, setExpanded] = useState(false);
  const Icon = feature.icon;

  return (
    <div className={cn('bg-white border-2 rounded-xl overflow-hidden transition-all', feature.borderColor)}>
      {/* Header - always visible */}
      <button
        onClick={() => setExpanded(!expanded)}
        className="w-full p-6 text-left hover:bg-gray-50/50 transition-colors"
      >
        <div className="flex items-start justify-between">
          <div className="flex items-center gap-4">
            <div className={cn('p-3 rounded-xl bg-gradient-to-br text-white', feature.gradient)}>
              <Icon className="w-6 h-6" />
            </div>
            <div>
              <div className="flex items-center gap-3">
                <h3 className="font-bold text-gray-900 text-xl">{feature.title}</h3>
                <StatusBadge status={feature.status} />
              </div>
              <p className="text-gray-500 mt-1">{feature.tagline}</p>
            </div>
          </div>
          <div className="text-gray-400 mt-1">
            {expanded ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
          </div>
        </div>

        <p className="text-gray-600 mt-4 leading-relaxed">
          {feature.description}
        </p>
      </button>

      {/* Expanded content */}
      {expanded && (
        <div className="px-6 pb-6 space-y-6 border-t border-gray-100 pt-6">
          {/* Sub-features table */}
          <div>
            <h4 className="font-semibold text-gray-900 mb-3 flex items-center gap-2">
              <Layers className="w-4 h-4 text-gray-500" />
              Capabilities
            </h4>
            <div className="space-y-3">
              {feature.subFeatures.map((sf) => (
                <div
                  key={sf.name}
                  className="flex items-start gap-3 p-3 bg-gray-50 rounded-lg"
                >
                  <div className="mt-0.5">
                    {sf.status === 'built' ? (
                      <CheckCircle className="w-4 h-4 text-emerald-500" />
                    ) : sf.status === 'in-design' ? (
                      <Clock className="w-4 h-4 text-blue-500" />
                    ) : (
                      <Activity className="w-4 h-4 text-gray-400" />
                    )}
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2">
                      <span className="font-medium text-gray-900 text-sm">{sf.name}</span>
                      {sf.status && <StatusBadge status={sf.status} size="sm" />}
                    </div>
                    <p className="text-gray-600 text-sm mt-0.5">{sf.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Value propositions */}
          <div>
            <h4 className="font-semibold text-gray-900 mb-3 flex items-center gap-2">
              <Zap className="w-4 h-4 text-amber-500" />
              Value
            </h4>
            <div className="space-y-2">
              {feature.valueProps.map((vp) => (
                <div key={vp} className="flex items-start gap-2.5 text-sm">
                  <ArrowRight className="w-4 h-4 text-gray-400 mt-0.5 shrink-0" />
                  <span className="text-gray-700">{vp}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

function DetailedBreakdown() {
  return (
    <div className="space-y-4">
      {FEATURES.map((feature) => (
        <FeatureDetail key={feature.id} feature={feature} />
      ))}
    </div>
  );
}

// ─── Main Page Component ────────────────────────────────────────────────────

type TabId = 'overview' | 'detailed';

export default function ProductOverview() {
  const [activeTab, setActiveTab] = useState<TabId>('overview');
  const lastUpdated = 'February 2026';

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Header */}
      <header className="bg-white border-b border-gray-200">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 py-6">
          <div className="flex items-center gap-3">
            <div className="bg-gradient-to-br from-violet-600 to-indigo-600 text-white p-2.5 rounded-xl">
              <Truck className="w-6 h-6" />
            </div>
            <div>
              <h1 className="text-2xl font-bold text-gray-900">FleetDRMS</h1>
              <p className="text-sm text-gray-500">Fleet Digital Records Management System</p>
            </div>
          </div>
        </div>
      </header>

      {/* Hero */}
      <div className="bg-gradient-to-r from-violet-600 to-indigo-600 text-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 py-12">
          <h2 className="text-3xl sm:text-4xl font-bold mb-3">
            Product Overview
          </h2>
          <p className="text-lg text-violet-100 max-w-2xl leading-relaxed">
            A comprehensive fleet and maintenance ERP built specifically for Amazon DSP operators.
            Real-time fleet visibility, preventive maintenance, and operational intelligence.
          </p>
          <p className="text-sm text-violet-200 mt-4">
            Last updated: {lastUpdated}
          </p>
        </div>
      </div>

      {/* Tab Navigation */}
      <div className="sticky top-0 z-10 bg-white border-b border-gray-200 shadow-sm">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <div className="flex gap-1">
            {([
              { id: 'overview' as TabId, label: 'Executive Overview' },
              { id: 'detailed' as TabId, label: 'Detailed Breakdown' },
            ]).map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={cn(
                  'px-5 py-3.5 text-sm font-medium transition-colors relative',
                  activeTab === tab.id
                    ? 'text-violet-700'
                    : 'text-gray-500 hover:text-gray-700'
                )}
              >
                {tab.label}
                {activeTab === tab.id && (
                  <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-violet-600 rounded-full" />
                )}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 py-8">
        {activeTab === 'overview' ? <ExecutiveOverview /> : <DetailedBreakdown />}
      </div>

      {/* Footer */}
      <footer className="bg-gray-50 border-t border-gray-200 mt-12">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 py-8">
          <div className="text-center">
            <p className="text-gray-600 text-sm">
              &copy; {new Date().getFullYear()} FleetDRMS &middot; Beanzoom Inc.
            </p>
            <p className="text-gray-400 text-xs mt-2">
              This document is confidential and intended for authorized partners only.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
