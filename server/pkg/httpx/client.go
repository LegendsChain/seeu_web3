package httpx

import "net/http"

func Client() *http.Client {
	return http.DefaultClient
}
