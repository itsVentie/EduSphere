package main

import (
	"encoding/json"
	"log"
	"net/http"
	"time"
)

type StatusResponse struct {
	Status    string    `json:"status"`
	Timestamp time.Time `json:"timestamp"`
}

type Course struct {
	ID          string `json:"id"`
	Code        string `json:"code"`
	Title       string `json:"title"`
	Instructor  string `json:"instructor"`
	Description string `json:"description"`
}

type SystemStats struct {
	ActiveStudents int     `json:"active_students"`
	TotalCourses   int     `json:"total_courses"`
	Submissions    int     `json:"submissions"`
	StorageUsedGB  float64 `json:"storage_used_gb"`
}

func handleHealth(w http.ResponseWriter, r *http.Request) {
	w.Header().Set("Content-Type", "application/json")
	json.NewEncoder(w).Encode(StatusResponse{
		Status:    "ok",
		Timestamp: time.Now(),
	})
}

func handleStats(w http.ResponseWriter, r *http.Request) {
	w.Header().Set("Content-Type", "application/json")
	stats := SystemStats{
		ActiveStudents: 1280,
		TotalCourses:   24,
		Submissions:    412,
		StorageUsedGB:  84.5,
	}
	json.NewEncoder(w).Encode(stats)
}

func handleCourses(w http.ResponseWriter, r *http.Request) {
	w.Header().Set("Content-Type", "application/json")
	courses := []Course{
		{
			ID:          "1",
			Code:        "CS-101",
			Title:       "Introduction to Computer Science",
			Instructor:  "Dr. A. Smirnov",
			Description: "Foundations of algorithms, data structures, and core programming concepts.",
		},
		{
			ID:          "2",
			Code:        "SEC-302",
			Title:       "Operating System Security",
			Instructor:  "E. Volkova",
			Description: "Vulnerability analysis, process isolation, and access control mechanisms.",
		},
	}
	json.NewEncoder(w).Encode(courses)
}

func main() {
	mux := http.NewServeMux()
	mux.HandleFunc("/api/health", handleHealth)
	mux.HandleFunc("/api/v1/stats", handleStats)
	mux.HandleFunc("/api/v1/courses", handleCourses)

	server := &http.Server{
		Addr:         ":8080",
		Handler:      mux,
		ReadTimeout:  10 * time.Second,
		WriteTimeout: 10 * time.Second,
	}

	log.Println("EduSphere Backend running on http://localhost:8080")
	if err := server.ListenAndServe(); err != nil {
		log.Fatalf("Server failed: %v", err)
	}
}
