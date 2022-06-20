export type Hit = {
    userId: number;
    id: number;
    title: string;
    completed: boolean;   
}

// It can be encapsulated into the component folder once there's no intention to share it
export type HitsPanelProps = {
    filteredHits: Hit[]; 
    currentIndex: Number; 
    setInput: React.Dispatch<React.SetStateAction<string>>;
    searchTerm: string;
}