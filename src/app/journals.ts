export interface Journal {
  id: string;
  title: string;
  doi?: string | null;
  pissn?: string | null;
  eissn?: string | null;
  issuesCount?: number;
  issues?: Issue[];
}
