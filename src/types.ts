export interface StudentMark {
  id: string;
  rollNo: string;
  name: string;
  rawScore: number;
  maxScore: number;
  confidence: number; // 0 to 1 representing OCR confidence
  status: 'extracted' | 'verified' | 'flagged' | 'synced';
  flagReason?: string;
  grade?: string;
}

export interface MarksheetSample {
  id: string;
  title: string;
  subject: string;
  courseCode: string;
  semester: string;
  examType: string;
  date: string;
  paperStyle: 'handwritten' | 'printed' | 'excel_scan';
  records: StudentMark[];
}

export interface FeatureCard {
  id: string;
  iconName: string;
  category: string;
  title: string;
  description: string;
}

export interface ErpTarget {
  id: string;
  name: string;
  logo: string;
  status: 'connected' | 'configuring' | 'available';
  syncType: 'API' | 'RPA' | 'Direct DB';
}
