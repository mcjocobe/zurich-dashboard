package apiInterface

import (
	"encoding/json"
	"io/ioutil"
	"log"
	"net/http"
)

type Response struct {
	rensose string
}

func ApiInterface() {
	response, _ := http.Get("https://transport.opendata.ch/v1/stationboard?station=siemens&limit=10")
	info, err := ioutil.ReadAll(response.Body)
	if err != nil {
		log.Fatal(err)
	}
	var jsonResponse map[string]any
	json.Unmarshal([]byte(info), &jsonResponse)
}
