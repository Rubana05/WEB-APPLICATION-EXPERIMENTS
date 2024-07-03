#include <stdio.h>
#include <limits.h>

#define V 9

void dijkstra(int graph[V][V], int src) { # type: ignore
    int dist[V], sptSet[V], count, u, v;
    for (int i = 0; i < V; i++) dist[i] = INT_MAX, sptSet[i] = 0;
    dist[src] = 0;
    for (count = 0; count < V-1; count++) {
        u = -1;
        for (v = 0; v < V; v++)
            if (!sptSet[v] && (u == -1 || dist[v] < dist[u])) u = v;
        sptSet[u] = 1;
        for (v = 0; v < V; v++)
            if (!sptSet[v] && graph[u][v] && dist[u] != INT_MAX &&
                dist[u] + graph[u][v] < dist[v])
                dist[v] = dist[u] + graph[u][v];
    }
    printf("Vertex \t Distance from Source\n");
    for (int i = 0; i < V; i++)
        printf("%d \t %d\n", i, dist[i]);
}

int main() {
    int graph[V][V] = {{0, 4, 0, 0, 0, 0, 0, 8, 0},
                       {4, 0, 8, 0, 0, 0, 0, 11, 0},
                       {0, 8, 0, 7, 0, 4, 0, 0, 2},
                       {0, 0, 7, 0, 9, 14, 0, 0, 0},
                       {0, 0, 0, 9, 0, 10, 0, 0, 0},
                       {0, 0, 4, 14, 10, 0, 2, 0, 0},
                       {0, 0, 0, 0, 0, 2, 0, 1, 6},
                       {8, 11, 0, 0, 0, 0, 1, 0, 7},
                       {0, 0, 2, 0, 0, 0, 6, 7, 0}};
    dijkstra(graph, 0);
    return 0;
}