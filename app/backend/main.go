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

func handleHealth(w http.ResponseWriter, r *http.Request) {
	w.Header().Set("Content-Type", "application/json")
	w.Header().Set("Access-Control-Allow-Origin", "*")

	res := StatusResponse{
		Status:    "ok",
		Timestamp: time.Now(),
	}

	json.NewEncoder(w).Encode(res)
}

func main() {
	mux := http.NewServeMux()
	mux.HandleFunc("/api/health", handleHealth)

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
