<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>BriCyte E6 Flow Cytometry Plots - High Resolution</title>
    <style>
        * {
            box-sizing: border-box;
        }
        body {
            font-family: 'Segoe UI', Arial, sans-serif;
            max-width: 1600px;
            margin: 0 auto;
            padding: 20px;
            background-color: #fafafa;
        }
        .container {
            background: white;
            padding: 40px;
            border-radius: 8px;
            box-shadow: 0 2px 10px rgba(0,0,0,0.1);
        }
        h1 {
            color: #1F4E78;
            border-bottom: 4px solid #1F4E78;
            padding-bottom: 15px;
            margin-bottom: 10px;
            font-size: 32px;
        }
        h2 {
            color: #2E75B6;
            margin-top: 50px;
            margin-bottom: 20px;
            font-size: 24px;
        }
        .clinical-context {
            background-color: #FFF8DC;
            border-left: 5px solid #FF9800;
            padding: 15px;
            margin: 20px 0;
            font-weight: 500;
        }
        .plot-group {
            margin: 50px 0;
            page-break-inside: avoid;
        }
        .plot-grid {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 30px;
            margin-bottom: 30px;
        }
        .plot-container {
            border: 2px solid #ddd;
            padding: 20px;
            background: #fafafa;
            border-radius: 5px;
            box-shadow: 0 1px 3px rgba(0,0,0,0.1);
        }
        .plot-title {
            font-size: 16px;
            font-weight: bold;
            color: #2E75B6;
            margin-bottom: 15px;
            text-align: center;
        }
        svg {
            background: white;
            border: 1px solid #ccc;
            width: 100%;
            height: auto;
            max-width: 100%;
            display: block;
            margin: 0 auto;
        }
        .interpretation {
            background-color: #E3F2FD;
            border-left: 5px solid #2196F3;
            padding: 15px;
            margin: 20px 0;
            font-size: 14px;
            line-height: 1.6;
        }
        .interpretation h3 {
            margin-top: 0;
            color: #1565C0;
            font-size: 16px;
        }
        .reference-ranges {
            background-color: #FFF9E6;
            border-left: 5px solid #FFC107;
            padding: 15px;
            margin: 20px 0;
            font-size: 14px;
        }
        .critical-point {
            background-color: #FFEBEE;
            border-left: 5px solid #F44336;
            padding: 15px;
            margin: 20px 0;
            font-weight: bold;
            color: #C62828;
        }
        table {
            width: 100%;
            border-collapse: collapse;
            margin: 20px 0;
            background: white;
        }
        th {
            background-color: #1F4E78;
            color: white;
            padding: 12px;
            text-align: left;
            font-weight: bold;
        }
        td {
            padding: 10px 12px;
            border-bottom: 1px solid #ddd;
        }
        tr:nth-child(even) {
            background-color: #f9f9f9;
        }
        .axis-label {
            font-size: 13px;
            font-weight: bold;
            fill: #333;
        }
        .plot-annotation {
            font-size: 12px;
            font-weight: bold;
            fill: #FF0000;
        }
        .legend-text {
            font-size: 12px;
            fill: #333;
        }
        @media print {
            body { margin: 0; padding: 0; background: white; }
            .container { box-shadow: none; }
            .plot-group { page-break-inside: avoid; }
        }
        @media (max-width: 1200px) {
            .plot-grid {
                grid-template-columns: 1fr;
            }
        }
    </style>
</head>
<body>
    <div class="container">
        <h1>🔬 MINDRAY BriCYTE E6 - FLOW CYTOMETRY PLOTS & INTERPRETATION</h1>
        <p style="text-align: center; font-size: 14px; color: #666;">High-Resolution Reference Guide for Application Specialists</p>
        <p style="text-align: center; font-size: 13px; color: #999;">Updated: June 2026</p>

        <!-- PLOT 1: NORMAL LYMPHOCYTE SUBSET -->
        <div class="plot-group">
            <h2>📊 PLOT 1: NORMAL LYMPHOCYTE SUBPOPULATION (T-Cell Subset)</h2>
            <div class="clinical-context">
                <strong>Clinical Context:</strong> Healthy adult with normal immune function and balanced T-cell populations
            </div>

            <div class="plot-grid">
                <!-- Plot A: FSC-SSC -->
                <div class="plot-container">
                    <div class="plot-title">Plot A: FSC-SSC (Lymphocyte Gate)</div>
                    <svg viewBox="0 0 600 600" xmlns="http://www.w3.org/2000/svg">
                        <!-- Axes -->
                        <line x1="60" y1="540" x2="540" y2="540" stroke="black" stroke-width="3"/>
                        <line x1="60" y1="60" x2="60" y2="540" stroke="black" stroke-width="3"/>
                        
                        <!-- Axis labels -->
                        <text x="300" y="580" text-anchor="middle" class="axis-label" font-size="14">FSC-A (Cell Size →)</text>
                        <text x="20" y="300" text-anchor="middle" class="axis-label" font-size="14" transform="rotate(-90 20 300)">← SSC-A (Complexity)</text>
                        
                        <!-- Grid -->
                        <line x1="60" y1="300" x2="540" y2="300" stroke="#ddd" stroke-width="1" stroke-dasharray="2,2"/>
                        <line x1="300" y1="60" x2="300" y2="540" stroke="#ddd" stroke-width="1" stroke-dasharray="2,2"/>
                        
                        <!-- Lymphocyte population (RED - main gate) -->
                        <circle cx="200" cy="400" r="100" fill="rgba(255,100,100,0.4)" stroke="#FF0000" stroke-width="3"/>
                        
                        <!-- Monocytes (BLUE - upper area) -->
                        <ellipse cx="380" cy="200" rx="60" ry="50" fill="rgba(100,149,237,0.2)" stroke="#4169E1" stroke-width="2" stroke-dasharray="5,5"/>
                        <text x="380" y="205" text-anchor="middle" class="legend-text" font-size="12" fill="#4169E1" font-weight="bold">Monocytes</text>
                        
                        <!-- Granulocytes (GREEN - far right) -->
                        <ellipse cx="480" cy="140" rx="50" ry="40" fill="rgba(0,128,0,0.2)" stroke="#008000" stroke-width="2" stroke-dasharray="5,5"/>
                        <text x="480" y="145" text-anchor="middle" class="legend-text" font-size="12" fill="#008000" font-weight="bold">Granulocytes</text>
                        
                        <!-- Lymphocyte label with arrow -->
                        <path d="M 140 420 L 100 430" stroke="#FF0000" stroke-width="2" fill="none" marker-end="url(#arrowred)"/>
                        <text x="80" y="435" class="plot-annotation" font-size="12">Lymphocytes</text>
                        <text x="80" y="450" class="plot-annotation" font-size="12">(gated)</text>
                        
                        <!-- Arrow marker -->
                        <defs>
                            <marker id="arrowred" markerWidth="10" markerHeight="10" refX="5" refY="3" orient="auto" markerUnits="strokeWidth">
                                <path d="M0,0 L0,6 L9,3 z" fill="#FF0000" />
                            </marker>
                        </defs>
                    </svg>
                </div>

                <!-- Plot B: CD3 vs CD45 -->
                <div class="plot-container">
                    <div class="plot-title">Plot B: CD3 vs CD45 (T-Cell Population)</div>
                    <svg viewBox="0 0 600 600" xmlns="http://www.w3.org/2000/svg">
                        <!-- Axes -->
                        <line x1="60" y1="540" x2="540" y2="540" stroke="black" stroke-width="3"/>
                        <line x1="60" y1="60" x2="60" y2="540" stroke="black" stroke-width="3"/>
                        
                        <!-- Axis labels -->
                        <text x="300" y="580" text-anchor="middle" class="axis-label" font-size="14">CD3-A (T-Cell Marker →)</text>
                        <text x="20" y="300" text-anchor="middle" class="axis-label" font-size="14" transform="rotate(-90 20 300)">← CD45-A (Leukocyte Marker)</text>
                        
                        <!-- Grid -->
                        <line x1="60" y1="300" x2="540" y2="300" stroke="#ddd" stroke-width="1" stroke-dasharray="2,2"/>
                        <line x1="300" y1="60" x2="300" y2="540" stroke="#ddd" stroke-width="1" stroke-dasharray="2,2"/>
                        
                        <!-- CD3+ CD45+ population (bright red) -->
                        <ellipse cx="350" cy="150" rx="120" ry="100" fill="rgba(255,100,100,0.5)" stroke="#FF0000" stroke-width="3"/>
                        
                        <!-- Annotations -->
                        <text x="350" y="155" text-anchor="middle" class="plot-annotation" font-size="14">75% CD3+</text>
                        <text x="350" y="175" text-anchor="middle" class="plot-annotation" font-size="14">All CD45+</text>
                        
                        <!-- Arrow pointing to population -->
                        <path d="M 300 280 L 330 200" stroke="#FF0000" stroke-width="2" fill="none" marker-end="url(#arrowred2)"/>
                        <text x="280" y="300" class="legend-text" font-size="12" fill="#FF0000" font-weight="bold">T-Cell</text>
                        <text x="280" y="318" class="legend-text" font-size="12" fill="#FF0000" font-weight="bold">Population</text>
                        
                        <defs>
                            <marker id="arrowred2" markerWidth="10" markerHeight="10" refX="5" refY="3" orient="auto" markerUnits="strokeWidth">
                                <path d="M0,0 L0,6 L9,3 z" fill="#FF0000" />
                            </marker>
                        </defs>
                    </svg>
                </div>
            </div>

            <div class="plot-grid">
                <!-- Plot C: CD4 vs CD8 -->
                <div class="plot-container">
                    <div class="plot-title">Plot C: CD4 vs CD8 (T-Cell Subsets)</div>
                    <svg viewBox="0 0 600 600" xmlns="http://www.w3.org/2000/svg">
                        <!-- Axes -->
                        <line x1="60" y1="540" x2="540" y2="540" stroke="black" stroke-width="3"/>
                        <line x1="60" y1="60" x2="60" y2="540" stroke="black" stroke-width="3"/>
                        
                        <!-- Quadrant dividing lines -->
                        <line x1="300" y1="60" x2="300" y2="540" stroke="#FF6B6B" stroke-width="2" stroke-dasharray="3,3"/>
                        <line x1="60" y1="300" x2="540" y2="300" stroke="#FF6B6B" stroke-width="2" stroke-dasharray="3,3"/>
                        
                        <!-- Axis labels -->
                        <text x="300" y="580" text-anchor="middle" class="axis-label" font-size="14">CD4-A →</text>
                        <text x="20" y="300" text-anchor="middle" class="axis-label" font-size="14" transform="rotate(-90 20 300)">← CD8-A</text>
                        
                        <!-- Q2: CD4+ CD8+ (double positive) - small cluster upper right -->
                        <circle cx="400" cy="120" r="20" fill="rgba(255,200,0,0.4)" stroke="#FFB800" stroke-width="2"/>
                        <text x="400" y="125" text-anchor="middle" class="legend-text" font-size="11" fill="#666">Q2: <2%</text>
                        
                        <!-- Q4: CD4+ CD8- (helper T cells) - LARGE cluster lower right -->
                        <ellipse cx="380" cy="380" rx="80" ry="70" fill="rgba(0,200,100,0.4)" stroke="#00C864" stroke-width="3"/>
                        <text x="380" y="380" text-anchor="middle" class="plot-annotation" font-size="13" font-weight="bold">40%</text>
                        <text x="380" y="398" text-anchor="middle" class="legend-text" font-size="11">CD4+ CD8-</text>
                        
                        <!-- Q1: CD4- CD8+ (killer T cells) - MEDIUM cluster upper left -->
                        <ellipse cx="180" cy="120" rx="60" ry="50" fill="rgba(100,200,255,0.4)" stroke="#0088FF" stroke-width="3"/>
                        <text x="180" y="125" text-anchor="middle" class="plot-annotation" font-size="13" font-weight="bold">20%</text>
                        <text x="180" y="143" text-anchor="middle" class="legend-text" font-size="11">CD4- CD8+</text>
                        
                        <!-- Quadrant labels -->
                        <text x="470" y="45" class="legend-text" font-size="11" fill="#666">Q2</text>
                        <text x="470" y="555" class="legend-text" font-size="11" fill="#666">Q4</text>
                        <text x="85" y="45" class="legend-text" font-size="11" fill="#666">Q1</text>
                        <text x="85" y="555" class="legend-text" font-size="11" fill="#666">Q3</text>
                    </svg>
                </div>

                <!-- Plot D: CD3 Histogram -->
                <div class="plot-container">
                    <div class="plot-title">Plot D: CD3 Histogram (Intensity Distribution)</div>
                    <svg viewBox="0 0 600 600" xmlns="http://www.w3.org/2000/svg">
                        <!-- Axes -->
                        <line x1="60" y1="500" x2="540" y2="500" stroke="black" stroke-width="3"/>
                        <line x1="60" y1="60" x2="60" y2="500" stroke="black" stroke-width="3"/>
                        
                        <!-- Axis labels -->
                        <text x="300" y="550" text-anchor="middle" class="axis-label" font-size="14">CD3 Fluorescence Intensity →</text>
                        <text x="20" y="280" text-anchor="middle" class="axis-label" font-size="14" transform="rotate(-90 20 280)">← Cell Count</text>
                        
                        <!-- Background histogram (negative population) -->
                        <path d="M 120 480 Q 140 460 160 450 Q 180 440 200 430 Q 220 420 240 410 L 240 500 L 120 500 Z" fill="rgba(150,150,150,0.3)" stroke="#999" stroke-width="2"/>
                        <text x="170" y="480" class="legend-text" font-size="11" fill="#666">CD3-</text>
                        
                        <!-- CD3+ histogram (main peak) -->
                        <path d="M 240 410 Q 280 350 320 280 Q 360 200 400 150 Q 440 200 480 280 Q 520 350 540 410 L 540 500 L 240 500 Z" fill="rgba(255,100,100,0.4)" stroke="#FF0000" stroke-width="3"/>
                        <text x="390" y="250" text-anchor="middle" class="plot-annotation" font-size="12">CD3+</text>
                        <text x="390" y="270" text-anchor="middle" class="legend-text" font-size="11">75%</text>
                        
                        <!-- Percentage labels -->
                        <text x="170" y="550" text-anchor="middle" class="legend-text" font-size="11">Low</text>
                        <text x="390" y="550" text-anchor="middle" class="legend-text" font-size="11">High</text>
                    </svg>
                </div>
            </div>

            <div class="interpretation">
                <h3>✓ Clinical Interpretation:</h3>
                <strong>NORMAL RESULT</strong> — All lymphocyte subset parameters within normal ranges:
                <ul style="margin: 10px 0; padding-left: 20px;">
                    <li>CD3+ (T cells): 75% — Normal (65-85% range)</li>
                    <li>CD4+ (Helper T cells): 40% — Normal (35-50% range)</li>
                    <li>CD8+ (Killer T cells): 20% — Normal (15-30% range)</li>
                    <li>CD4:CD8 Ratio: 2.0 — Normal (1.5-3.0 range)</li>
                    <li>Fluorescence patterns show appropriate antigen expression</li>
                </ul>
                <strong>Conclusion:</strong> Immune function is adequate. No lymphocyte deficiency detected.
            </div>

            <div class="reference-ranges">
                <strong>📋 Reference Ranges (Normal Adults):</strong><br>
                CD3+: 65-85% or 700-2200 cells/μL | CD4+: 35-50% or 400-1200 cells/μL | CD8+: 15-30% or 150-900 cells/μL | CD4:CD8 Ratio: 1.5-3.0
            </div>
        </div>

        <!-- PLOT 2: ABNORMAL - HIV WITH LOW CD4 -->
        <div class="plot-group">
            <h2>⚠️ PLOT 2: ABNORMAL - HIV WITH SEVERE CD4 DEPLETION</h2>
            <div class="clinical-context">
                <strong>Clinical Context:</strong> Patient with untreated HIV and CD4 count <50 cells/μL (AIDS-defining). Critical immunosuppression.
            </div>

            <div class="interpretation" style="background-color: #FFEBEE; border-color: #F44336;">
                <h3 style="color: #C62828;">⚠️ CRITICAL FINDINGS:</h3>
                <ul style="margin: 10px 0; padding-left: 20px;">
                    <li><strong>CD4+:</strong> 1% (absolute = 30 cells/μL) — CRITICALLY LOW</li>
                    <li><strong>CD8+:</strong> 70% (absolute = 2100 cells/μL) — ELEVATED (CD8 cells persist better than CD4)</li>
                    <li><strong>CD4:CD8 Ratio:</strong> 0.01 — SEVERELY INVERTED (normal 1.5-3.0)</li>
                    <li><strong>Abnormal double-negative CD4-CD8- population</strong> may be visible</li>
                    <li><strong>Risk for opportunistic infections:</strong> PCP, CMV, MAC, TB</li>
                </ul>
            </div>

            <div class="critical-point">
                🔴 STAT NOTIFICATION REQUIRED — Patient at extreme risk for life-threatening infections. Urgent ART initiation/modification needed.
            </div>
        </div>

        <!-- PLOT 3: HLA-B27 NEGATIVE -->
        <div class="plot-group">
            <h2>✓ PLOT 3: NORMAL HLA-B27 NEGATIVE</h2>
            <div class="clinical-context">
                <strong>Clinical Context:</strong> Patient without ankylosing spondylitis risk factors
            </div>

            <div class="plot-container">
                <div class="plot-title">HLA-B27 Test: Negative Result (MFI < 4860)</div>
                <svg viewBox="0 0 600 600" xmlns="http://www.w3.org/2000/svg">
                    <!-- Axes -->
                    <line x1="60" y1="540" x2="540" y2="540" stroke="black" stroke-width="3"/>
                    <line x1="60" y1="60" x2="60" y2="540" stroke="black" stroke-width="3"/>
                    
                    <!-- Quadrant lines (gates) -->
                    <line x1="300" y1="60" x2="300" y2="540" stroke="#4169E1" stroke-width="2" stroke-dasharray="3,3"/>
                    <line x1="60" y1="300" x2="540" y2="300" stroke="#4169E1" stroke-width="2" stroke-dasharray="3,3"/>
                    
                    <!-- Axis labels -->
                    <text x="300" y="580" text-anchor="middle" class="axis-label" font-size="14">HLA-B27-FITC →</text>
                    <text x="20" y="300" text-anchor="middle" class="axis-label" font-size="14" transform="rotate(-90 20 300)">← HLA-B7-PE</text>
                    
                    <!-- Main population (LOWER-LEFT: Q3 - negative) -->
                    <ellipse cx="150" cy="400" rx="90" ry="80" fill="rgba(100,149,237,0.4)" stroke="#4169E1" stroke-width="3"/>
                    <text x="150" y="405" text-anchor="middle" class="plot-annotation" font-size="14">95%</text>
                    <text x="150" y="425" text-anchor="middle" class="legend-text" font-size="12">Q3: Negative</text>
                    
                    <!-- Small upper-right population (Q2: <5% - background) -->
                    <circle cx="420" cy="150" r="25" fill="rgba(200,200,200,0.3)" stroke="#999" stroke-width="2" stroke-dasharray="3,3"/>
                    <text x="420" y="155" text-anchor="middle" class="legend-text" font-size="11"><5%</text>
                    <text x="420" y="170" text-anchor="middle" class="legend-text" font-size="10">Background</text>
                    
                    <!-- Quadrant labels -->
                    <text x="480" y="45" class="legend-text" font-size="12" fill="#666" font-weight="bold">Q2</text>
                    <text x="480" y="555" class="legend-text" font-size="12" fill="#666" font-weight="bold">Q4</text>
                    <text x="85" y="45" class="legend-text" font-size="12" fill="#666" font-weight="bold">Q1</text>
                    <text x="85" y="555" class="legend-text" font-size="12" fill="#666" font-weight="bold">Q3 (Neg)</text>
                </svg>
            </div>

            <div class="interpretation">
                <h3>✓ NEGATIVE RESULT</h3>
                <strong>MFI < 4860 | <5% in positive gate | Clear lower-left clustering</strong><br>
                <strong>Clinical Significance:</strong> HLA-B27 antigen is ABSENT. Ankylosing spondylitis is effectively RULED OUT (~90% sensitivity). 
                Result strongly argues against spondyloarthropathy diagnosis unless clinical suspicion remains very high.
            </div>
        </div>

        <!-- PLOT 4: HLA-B27 POSITIVE -->
        <div class="plot-group">
            <h2>⚠️ PLOT 4: ABNORMAL HLA-B27 POSITIVE</h2>
            <div class="clinical-context">
                <strong>Clinical Context:</strong> Patient with inflammatory back pain; HLA-B27 positive result
            </div>

            <div class="plot-container">
                <div class="plot-title">HLA-B27 Test: Positive Result (MFI > 5940, >80% in Q4)</div>
                <svg viewBox="0 0 600 600" xmlns="http://www.w3.org/2000/svg">
                    <!-- Axes -->
                    <line x1="60" y1="540" x2="540" y2="540" stroke="black" stroke-width="3"/>
                    <line x1="60" y1="60" x2="60" y2="540" stroke="black" stroke-width="3"/>
                    
                    <!-- Quadrant lines -->
                    <line x1="300" y1="60" x2="300" y2="540" stroke="#FF0000" stroke-width="2" stroke-dasharray="3,3"/>
                    <line x1="60" y1="300" x2="540" y2="300" stroke="#FF0000" stroke-width="2" stroke-dasharray="3,3"/>
                    
                    <!-- Axis labels -->
                    <text x="300" y="580" text-anchor="middle" class="axis-label" font-size="14">HLA-B27-FITC →</text>
                    <text x="20" y="300" text-anchor="middle" class="axis-label" font-size="14" transform="rotate(-90 20 300)">← HLA-B7-PE</text>
                    
                    <!-- BRIGHT population (UPPER-RIGHT: Q2 - positive) -->
                    <ellipse cx="400" cy="150" rx="110" ry="100" fill="rgba(255,100,100,0.5)" stroke="#FF0000" stroke-width="4"/>
                    <text x="400" y="150" text-anchor="middle" class="plot-annotation" font-size="16" font-weight="bold">85%</text>
                    <text x="400" y="175" text-anchor="middle" class="plot-annotation" font-size="13">POSITIVE</text>
                    <text x="400" y="195" text-anchor="middle" class="legend-text" font-size="12">HLA-B27+</text>
                    
                    <!-- Small negative population (lower-left) -->
                    <ellipse cx="150" cy="400" rx="50" ry="45" fill="rgba(200,200,200,0.3)" stroke="#999" stroke-width="2"/>
                    <text x="150" y="405" text-anchor="middle" class="legend-text" font-size="11">~10%</text>
                    <text x="150" y="420" text-anchor="middle" class="legend-text" font-size="10">Negative</text>
                    
                    <!-- Quadrant labels -->
                    <text x="480" y="45" class="legend-text" font-size="12" fill="#666" font-weight="bold">Q2 (Pos)</text>
                    <text x="480" y="555" class="legend-text" font-size="12" fill="#666" font-weight="bold">Q4</text>
                    <text x="85" y="45" class="legend-text" font-size="12" fill="#666" font-weight="bold">Q1</text>
                    <text x="85" y="555" class="legend-text" font-size="12" fill="#666" font-weight="bold">Q3</text>
                </svg>
            </div>

            <div class="interpretation" style="background-color: #FFEBEE; border-color: #F44336;">
                <h3 style="color: #C62828;">⚠️ POSITIVE RESULT</h3>
                <strong>MFI > 5940 | >80% in positive gate | Bright upper-right population</strong><br>
                <strong>Clinical Significance:</strong> HLA-B27 antigen is PRESENT. Patient carries HLA-B27 gene.<br>
                <strong>Associated Conditions:</strong> 
                <ul style="margin: 5px 0; padding-left: 20px;">
                    <li>Ankylosing Spondylitis: ~90% positive (strongest association)</li>
                    <li>Reactive Arthritis: 40-80% positive</li>
                    <li>Inflammatory Bowel Disease-related: 35-75% positive</li>
                    <li>Psoriatic Arthritis: 40-50% positive</li>
                </ul>
                <strong>⚠️ MUST CORRELATE WITH CLINICAL FINDINGS</strong> (inflammatory back pain, MRI findings, ESR/CRP) to confirm or exclude spondyloarthropathy diagnosis.
            </div>
        </div>

        <!-- PLOT 5: GREY ZONE -->
        <div class="plot-group">
            <h2>⚠️ PLOT 5: HLA-B27 GREY ZONE (EQUIVOCAL)</h2>
            <div class="clinical-context">
                <strong>Clinical Context:</strong> Borderline HLA-B27 expression; likely HLA-B7 co-expression/interference
            </div>

            <div class="plot-container">
                <div class="plot-title">HLA-B27 Test: Grey Zone Result (MFI 4860-5940, 5-80% in positive gate)</div>
                <svg viewBox="0 0 600 600" xmlns="http://www.w3.org/2000/svg">
                    <!-- Axes -->
                    <line x1="60" y1="540" x2="540" y2="540" stroke="black" stroke-width="3"/>
                    <line x1="60" y1="60" x2="60" y2="540" stroke="black" stroke-width="3"/>
                    
                    <!-- Quadrant lines -->
                    <line x1="300" y1="60" x2="300" y2="540" stroke="#FFC107" stroke-width="2" stroke-dasharray="3,3"/>
                    <line x1="60" y1="300" x2="540" y2="300" stroke="#FFC107" stroke-width="2" stroke-dasharray="3,3"/>
                    
                    <!-- Axis labels -->
                    <text x="300" y="580" text-anchor="middle" class="axis-label" font-size="14">HLA-B27-FITC →</text>
                    <text x="20" y="300" text-anchor="middle" class="axis-label" font-size="14" transform="rotate(-90 20 300)">← HLA-B7-PE</text>
                    
                    <!-- BORDERLINE population (intermediate intensity, between Q2 and Q3) -->
                    <path d="M 250 350 Q 300 200 350 150 Q 400 200 420 300 L 420 500 Q 350 480 250 500 Z" fill="rgba(255,193,7,0.5)" stroke="#FFC107" stroke-width="3"/>
                    <text x="320" y="280" text-anchor="middle" class="plot-annotation" font-size="14">40-60%</text>
                    <text x="320" y="305" text-anchor="middle" class="legend-text" font-size="12" font-weight="bold">GREY ZONE</text>
                    <text x="320" y="325" text-anchor="middle" class="legend-text" font-size="11">(Equivocal)</text>
                    
                    <!-- Annotation: HLA-B7 interference note -->
                    <text x="470" y="100" class="legend-text" font-size="11" fill="#C62828" font-weight="bold">Possible</text>
                    <text x="470" y="118" class="legend-text" font-size="11" fill="#C62828" font-weight="bold">HLA-B7</text>
                    <text x="470" y="136" class="legend-text" font-size="11" fill="#C62828" font-weight="bold">Interference</text>
                    
                    <!-- Quadrant labels -->
                    <text x="480" y="45" class="legend-text" font-size="12" fill="#666" font-weight="bold">Q2</text>
                    <text x="480" y="555" class="legend-text" font-size="12" fill="#666" font-weight="bold">Q4</text>
                    <text x="85" y="45" class="legend-text" font-size="12" fill="#666" font-weight="bold">Q1</text>
                    <text x="85" y="555" class="legend-text" font-size="12" fill="#666" font-weight="bold">Q3</text>
                </svg>
            </div>

            <div class="critical-point">
                ⚠️ GREY ZONE — INCONCLUSIVE RESULT | MFI: 4860-5940 (within ±10% of cutoff 5400) | Recommendation: HLA genotyping/sequencing required for definitive diagnosis
            </div>

            <div class="interpretation">
                <h3>Clinical Management:</h3>
                <ul style="margin: 10px 0; padding-left: 20px;">
                    <li>❌ <strong>Do NOT</strong> report as simply "positive" or "negative"</li>
                    <li>✓ <strong>Document</strong> the result as "GREY ZONE - Inconclusive/Equivocal"</li>
                    <li>✓ <strong>Recommend</strong> genetic HLA typing (DNA sequencing) for definitive status</li>
                    <li>✓ <strong>Consider</strong> repeating flow test with fresh reagent lot</li>
                    <li>✓ <strong>Advise</strong> clinician that diagnosis requires genetic confirmation</li>
                    <li>✓ <strong>Note</strong> possible HLA-B7 co-expression in report</li>
                </ul>
            </div>
        </div>

        <!-- SUMMARY TABLE -->
        <div style="margin-top: 60px; padding: 30px; background-color: #F5F5F5; border-radius: 5px;">
            <h2>📋 QUICK REFERENCE - INTERPRETATION SUMMARY</h2>
            <table>
                <thead>
                    <tr>
                        <th>Test</th>
                        <th>Result</th>
                        <th>Key Metric</th>
                        <th>Clinical Significance</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td><strong>Lymph. Subset</strong></td>
                        <td>NORMAL</td>
                        <td>CD4:CD8 = 2.0</td>
                        <td>Normal immune function</td>
                        <td>Report routine</td>
                    </tr>
                    <tr>
                        <td><strong>Lymph. Subset</strong></td>
                        <td>ABNORMAL</td>
                        <td>CD4% = 1%, CD4:CD8 = 0.01</td>
                        <td>AIDS-defining immunodeficiency</td>
                        <td>STAT notify physician</td>
                    </tr>
                    <tr>
                        <td><strong>HLA-B27</strong></td>
                        <td>NEGATIVE</td>
                        <td>MFI < 4860</td>
                        <td>AS effectively ruled out</td>
                        <td>Report negative</td>
                    </tr>
                    <tr>
                        <td><strong>HLA-B27</strong></td>
                        <td>POSITIVE</td>
                        <td>MFI > 5940, >80% Q4</td>
                        <td>Suggests spondyloarthropathy</td>
                        <td>Correlate with clinical</td>
                    </tr>
                    <tr>
                        <td><strong>HLA-B27</strong></td>
                        <td>GREY ZONE</td>
                        <td>MFI 4860-5940</td>
                        <td>Equivocal, need confirmation</td>
                        <td>Genetic testing required</td>
                    </tr>
                </tbody>
            </table>
        </div>

        <div style="margin-top: 60px; padding: 30px; background-color: #E3F2FD; border-radius: 5px; text-align: center;">
            <p style="font-size: 12px; color: #666;">
                <strong>BriCyte E6 Flow Cytometry Reference Guide</strong><br>
                High-Resolution Version | For Mindray Applications Specialists<br>
                Plots are now enlarged, high-contrast, and clearly labeled for training and reference
            </p>
        </div>
    </div>
</body>
</html>
