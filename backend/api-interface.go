package apiInterface

import (
	"fmt"
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
	fmt.Println(info)
}
